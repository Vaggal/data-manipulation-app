import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from './map.service';

import { Map, View, Feature } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  coords: any[] = [];
  map!: Map;
  constructor(private mapService: MapService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.coords = this.mapService.getLocations(data.readings);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    let sensorPoints: Feature<any>[] = [];

    this.coords.forEach((coord) => {
      sensorPoints.push(
        new Feature({
          geometry: new Point(fromLonLat([coord[0], coord[1]])),
        })
      );
    });
    // let vectorSource = this.map.addLayer();

    let vectorLayer = new VectorLayer({
      style: new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({ color: 'black' }),
          stroke: new Stroke({
            color: [255, 0, 0],
            width: 2,
          }),
        }),
      }),
    });
    vectorLayer.setSource(
      new VectorSource({
        features: sensorPoints,
      })
    );
    this.map = new Map({
      view: new View({
        center: fromLonLat(this.mapService.calculateCenter(this.coords)),
        zoom: 16,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map',
    });
    this.map.addLayer(vectorLayer);
  }
}
