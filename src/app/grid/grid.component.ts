import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Reading } from 'src/typings';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'box_id' },
    { field: 'sensor_type', filter: 'agTextColumnFilter', sortable: true },
    { field: 'unit' },
    { field: 'name', filter: 'agTextColumnFilter' },
    { field: 'range_l' },
    { field: 'range_u' },
    { field: 'longitude' },
    { field: 'latitude' },
    { field: 'reading' },
    { field: 'reading_ts', sortable: true },
  ];
  rowData: Reading[] = [];
  domLayout = 'autoHeight';
  pagination = true;
  paginationPageSize = 10;
  paginationAutoPageSize = true;

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.rowData = data.readings;
    });
  }
}
