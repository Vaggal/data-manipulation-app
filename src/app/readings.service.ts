import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Reading } from 'src/typings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadingsService {
  constructor(private http: HttpClient) {}

  getReadings(): Observable<Reading[]> {
    return this.http.get<Reading[]>(document.location.origin + '/assets/data/sensor_readings_correct.json');
  }
}
