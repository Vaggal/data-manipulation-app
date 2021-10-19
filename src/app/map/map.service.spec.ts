import { TestBed } from '@angular/core/testing';
import { Reading } from 'src/typings';

import { MapService } from './map.service';

describe('MapService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getLocations: should return empty array when given empty array', () => {
    const testReadings: Reading[] = [];
    const exprectedLocations: number[][] = [];

    const locations = service.getLocations(testReadings);
    expect(locations).toEqual(exprectedLocations);
  });

  it('getLocations: Finds the locations of the sensors', () => {
    const testReadings: Reading[] = [
      {
        id: 'Box-A1-O3',
        box_id: 'Box-A1',
        sensor_type: 'O3',
        unit: 'ppm',
        name: 'Ozone',
        range_l: 0.0,
        range_u: 1000.0,
        longitude: -0.06507,
        latitude: 51.51885,
        reading: 672,
        reading_ts: '2019-09-10T00:00:00',
      },
      {
        id: 'Box-A1-NO2',
        box_id: 'Box-A1',
        sensor_type: 'NO2',
        unit: 'ppm',
        name: 'Nitrogen dioxide',
        range_l: 0.0,
        range_u: 1000.0,
        longitude: -0.06507,
        latitude: 51.51885,
        reading: 193,
        reading_ts: '2019-09-10T00:00:00',
      },
      {
        id: 'Box-A1-CO',
        box_id: 'Box-A1',
        sensor_type: 'CO',
        unit: 'ppm',
        name: 'Carbon monoxide',
        range_l: 0.0,
        range_u: 1000.0,
        longitude: -0.06207,
        latitude: 51.51885,
        reading: 331,
        reading_ts: '2019-09-10T00:00:00',
      },
    ];

    const exprectedLocations = [
      [-0.06507, 51.51885],
      [-0.06507, 51.51885],
      [-0.06207, 51.51885],
    ];

    const locations = service.getLocations(testReadings);
    expect(locations).toEqual(exprectedLocations);
  });

  it('calculateCenter: should return 0,0 as the center if no locations are provided', () => {
    const testLocations: number[][] = [];
    const expectedCenter = [0, 0];

    let center = service.calculateCenter(testLocations);
    expect(center).toEqual(expectedCenter);
  });

  it('calculateCenter: should calculate the center correctly', () => {
    const testLocations = [
      [0, 0],
      [1, 5],
      [2, 4],
    ];
    const expectedCenter = [1, 3];

    let center = service.calculateCenter(testLocations);
    expect(center).toEqual(expectedCenter);
  });
});
