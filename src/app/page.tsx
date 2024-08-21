import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className="bg-white-700 mx-auto mt-5 w-[98%] h-[90vh]">
      <Map />
    </div>
  );
}
