import { Injectable } from '@angular/core';
import { Reading } from 'src/typings';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}

  /**
   * finds the locations of each sensor provided in the readings
   * @param readings
   * @returns
   */
  getLocations(readings: Reading[]): any[] {
    let uniqueIds = [...new Set(readings.map((o) => o.id))];
    let coords: any[] = [];
    uniqueIds.forEach((id) => {
      let foundReading = readings.find((reading) => reading.id === id);
      coords.push([foundReading?.longitude, foundReading?.latitude]);
    });
    return coords;
  }

  /**
   * Calculates the average values for longitude and latitude of the sensors locations
   * @param coords
   * @returns
   */
  calculateCenter(coords: any[]): number[] {
    if (coords.length === 0) {
      return [0, 0];
    }

    let center = coords
      .reduce((previous, current) => [previous[0] + current[0], previous[1] + current[1]])
      .map((coord: number) => coord / coords.length);

    return center;
  }
}
