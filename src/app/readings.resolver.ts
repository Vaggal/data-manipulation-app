import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Reading } from 'src/typings';
import { ReadingsService } from './readings.service';

@Injectable({
  providedIn: 'root',
})
export class ReadingsResolver implements Resolve<Reading[]> {
  constructor(private readingsService: ReadingsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reading[]> | Reading[] {
    return this.readingsService.getReadings();
  }
}
