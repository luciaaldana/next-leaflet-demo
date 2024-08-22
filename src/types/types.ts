export enum EContinent {
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
  continent: EContinent;
  languages: string;
}

export interface ICountry {
  code: string;
  name: string;
  emoji: string;
  region: string;
  details: ICountryDetails;
}

export interface ICountryWithCoords extends ICountry {
  latitude: number;
  longitude: number;
}

export type TLanguage = {
  name: string;
};

type TContinentName = {
  name: EContinent;
};

export interface ICountriesApiResponse {
  code: string;
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: TLanguage[];
  continent: TContinentName;
  awsRegion: string;
}

export interface ISearchInput<T extends Record<string, any>> {
  placeholder?: string;
  data: T[];
  setFilteredData: (data: T[]) => void;
  filterKeys: string[];
}
