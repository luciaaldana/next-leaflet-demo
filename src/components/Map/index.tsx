'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { MapProps } from '@/types/types';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const defaults = {
  zoom: 2,
  posix: [20.0, -85.0] as LatLngExpression,
};

const Map = (props: MapProps) => {
  const { zoom = defaults.zoom, posix = defaults.posix, countries } = props;

  return (
    <MapContainer center={posix} zoom={zoom} scrollWheelZoom={true} className="h-3/4 w-full rounded-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countries.map((country) => (
        <Marker key={country.code} position={[country.latitude, country.longitude]}>
          <Popup>{country.name}</Popup>
          <Tooltip>{country.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
