import { LatLngExpression, LatLngTuple } from 'leaflet';

export interface ICountriesApi {
  name: string;
  code: string;
}

export interface ICountriesWithCoords {
  name: string;
  code: string;
  latitude: number;
  longitude: number;
}

export interface MapProps {
  posix?: LatLngExpression | LatLngTuple;
  zoom?: number;
  countries: ICountriesWithCoords[];
}
