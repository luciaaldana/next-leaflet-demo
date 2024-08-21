import { gql } from '@apollo/client';
import countriesData from '@/data/countries.json';
import client from '@/services/apollo-client';
import { ICountriesWithCoords, ICountriesApi } from '@/types/types';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

export const fetchCountries = async () => {
  try {
    const { data, loading, error } = await client.query({ query: GET_COUNTRIES });
    const countriesWithCoords = data.countries
      .map((country: ICountriesApi) => {
        const jsonCountry = countriesData.find((cd) => cd['ISO Code'] === country.code);
        return {
          ...country,
          latitude: jsonCountry ? jsonCountry.Latitude : null,
          longitude: jsonCountry ? jsonCountry.Longitude : null,
        };
      })
      .filter((country: ICountriesWithCoords) => country.latitude && country.longitude);
    return countriesWithCoords;
  } catch (error) {
    console.error('Error fetching countries', error);
    return [];
  }
};
