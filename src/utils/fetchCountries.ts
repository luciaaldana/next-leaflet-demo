import { gql } from '@apollo/client';
import countriesData from '@/data/countries.json';
import client from '@/services/apollo-client';
import { ICountry, ICountriesApiResponse, ICountryWithCoords, TLanguage } from '@/types/types';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      emoji
      currency
      awsRegion
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function formatLanguages(languages: TLanguage[]) {
  const names = languages.map((lang) => lang.name);
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}` : names[0];
}

export const fetchCountries = async (): Promise<ICountryWithCoords[]> => {
  try {
    const { data, loading, error } = await client.query({ query: GET_COUNTRIES });

    const transformedCountries = data.countries.map((country: ICountriesApiResponse) => ({
      name: country.name,
      emoji: country.emoji,
      code: country.code,
      region: country.awsRegion,
      details: {
        continent: country.continent.name,
        capital: country.capital,
        currency: country.currency,
        languages: formatLanguages(country.languages),
      },
    }));

    const countriesWithCoords = transformedCountries
      .map((country: ICountry) => {
        const jsonCountry = countriesData.find((cd) => cd['ISO Code'] === country.code);
        return {
          ...country,
          latitude: jsonCountry ? jsonCountry.Latitude : null,
          longitude: jsonCountry ? jsonCountry.Longitude : null,
        };
      })
      .filter((country: ICountryWithCoords) => country.latitude && country.longitude);
    return countriesWithCoords;
  } catch (error) {
    console.error('Error fetching countries', error);
    return [];
  }
};
