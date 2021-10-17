export interface Reading {
  id: string;
  box_id: String;
  sensor_type: String;
  unit: 'ppm';
  name: String;
  range_l: Number;
  range_u: Number;
  longitude: Number;
  latitude: Number;
  reading: Number;
  reading_ts: Date;
}
