import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

import { Reading } from '../../typings';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('dataGraph', { static: true }) dataGraph!: ElementRef;

  readings: Reading[] = [];
  chart!: any;
  value!: string;

  constructor(private actRoute: ActivatedRoute) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.readings = data.readings;
    });
  }

  ngAfterViewInit(): void {
    this.actRoute.data.subscribe((data) => {
      let finalData = data.readings.filter((reading: Reading) => {
        return reading.id === 'Box-A1-O3';
      });
      this.value = 'O3';

      this.chart = new Chart(this.dataGraph.nativeElement, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'test',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              data: finalData,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: true,
            },
          },
          parsing: {
            xAxisKey: 'reading_ts',
            yAxisKey: 'reading',
          },
          scales: {
            x: {
              type: 'time',
              time: {
                displayFormats: {},
                minUnit: 'hour',
                tooltipFormat: 'dd/M/yyyy HH:mm:ss',
              },
              title: {
                display: true,
                text: 'Date',
              },
              ticks: {
                major: {
                  enabled: true, // <-- This is the key line
                },
              },
            },
            y: {
              title: {
                display: true,
                text: this.value,
              },
              suggestedMin: 0,
              suggestedMax: 1200,
            },
          },
        },
      });
    });
  }
}
