import { TestBed } from '@angular/core/testing';

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

  it('getLocations:', () => {});
  it('getLocations:', () => {});
  it('calculateCenter:', () => {});
  it('calculateCenter:', () => {});
});
