'use client';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@/services/apollo-client';
import { fetchCountries } from '@/utils/fetchCountries';
import Spinner from '@/components/Spinner';
import SearchInput from '@/components/SearchInput';
import { ICountryWithCoords } from '@/types/types';

export function Home() {
  const [countries, setCountries] = useState<ICountryWithCoords[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountryWithCoords[]>(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/'), {
        loading: () => (
          <div className="bg-purple-900/30 border border-purple-700 rounded-lg h-3/4 w-full max-w-screen-lg flex items-center justify-center">
            <Spinner />
          </div>
        ),
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetchCountries();
      setCountries(res);
    };

    loadCountries();
  }, []);

  return (
    <ApolloProvider client={client}>
      <main className="p-2 w-screen h-screen flex items-center mt-5 sm:mt-0 sm:justify-center flex-col gap-8">
        <SearchInput
          data={countries}
          setFilteredData={setFilteredCountries}
          filteredData={filteredCountries}
          filterKeys={['name', 'code', 'region']}
          placeholder="Search by name, code or region..."
        />
        <Map countries={filteredCountries} />
      </main>
    </ApolloProvider>
  );
}

export default Home;
