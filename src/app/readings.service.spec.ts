import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReadingsService } from './readings.service';
import { environment } from '../environments/environment';

describe('ReadingsService', () => {
  let service: ReadingsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ReadingsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle the retun values properly', () => {
    let testResponse = [
      {
        id: 'Box-A1-O3',
        box_id: 'Box-A1',
        sensor_type: 'O3',
        unit: 'ppm',
        name: 'Ozone',
        range_l: 0,
        range_u: 1000,
        longitude: -0.06507,
        latitude: 51.51885,
        reading: 672,
        reading_ts: '2019-09-10T00:00:00',
      },
    ];

    service.getReadings().subscribe((data) => {
      expect(data).toEqual(testResponse);
    });

    let req = httpMock.expectOne(`${environment.serverUrl}/assets/data/sensor_readings_correct.json`);
    expect(req.request.method).toBe('GET');
    req.flush(testResponse);
  });
});
