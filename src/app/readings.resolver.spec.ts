import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReadingsResolver } from './readings.resolver';

describe('ReadingsResolver', () => {
  let resolver: ReadingsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(ReadingsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
