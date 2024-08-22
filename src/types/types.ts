import { LatLngExpression, LatLngTuple } from 'leaflet';

export enum Continent {
  Africa = 'Africa',
  Europe = 'Europe',
  Asia = 'Asia',
  NorthAmerica = 'North America',
  SouthAmerica = 'South America',
  Oceania = 'Oceania',
  Antarctica = 'Antarctica',
}

interface ICountryDetails {
  capital: string;
  currency: string;
  continent: Continent;
  languages: string;
}

export interface ICountry {
  code: string;
  name: string;
  emoji: string;
  details: ICountryDetails;
}

export interface ICountryWithCoords extends ICountry {
  latitude: number;
  longitude: number;
}

export type TLanguage = {
  name: string;
};

type ContinentName = {
  name: Continent;
};

export interface ICountriesApiResponse {
  code: string;
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: TLanguage[];
  continent: ContinentName;
}
