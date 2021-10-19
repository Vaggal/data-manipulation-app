import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Reading } from 'src/typings';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReadingsService {
  constructor(private http: HttpClient) {}

  getReadings(): Observable<Reading[]> {
    return this.http.get<Reading[]>(environment.serverUrl + '/assets/data/sensor_readings_correct.json');
  }
}
