'use client';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@/services/apollo-client';
import { fetchCountries } from '@/utils/fetchCountries';
import Spinner from '@/components/Spinner';

export function Home() {
  const [countries, setCountries] = useState([]);

  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/'), {
        loading: () => (
          <div className="bg-purple-900/30 border border-purple-700 rounded-lg h-3/4 w-full  flex items-center justify-center">
            <Spinner />
          </div>
        ),

        ssr: false,
      }),
    []
  );

  useEffect(() => {
    const loadCountries = async () => {
      const countriesWithCoords = await fetchCountries();
      setCountries(countriesWithCoords);
    };

    loadCountries();
  }, []);

  return (
    <ApolloProvider client={client}>
      <main className="p-2 w-screen h-screen flex items-center justify-center">
        <Map countries={countries} />
      </main>
    </ApolloProvider>
  );
}

export default Home;
