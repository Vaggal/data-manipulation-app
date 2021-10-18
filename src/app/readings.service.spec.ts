import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReadingsService } from './readings.service';

describe('ReadingsService', () => {
  let service: ReadingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ReadingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
