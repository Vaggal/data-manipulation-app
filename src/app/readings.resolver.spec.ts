import { TestBed } from '@angular/core/testing';

import { ReadingsResolver } from './readings.resolver';

describe('ReadingsResolver', () => {
  let resolver: ReadingsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReadingsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
