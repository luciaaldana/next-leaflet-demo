'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import Popup from '../Popup';
import { ICountryWithCoords } from '@/types/types';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const INITIAL_MAP = {
  zoom: 2,
  posix: [20.0, -85.0] as LatLngExpression,
};

const Map = ({ countries }: { countries: ICountryWithCoords[] }): JSX.Element => (
  <MapContainer
    center={INITIAL_MAP.posix}
    zoom={INITIAL_MAP.zoom}
    scrollWheelZoom={true}
    className="h-3/4 w-full rounded-lg max-w-screen-lg"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {countries.map((country) => (
      <Marker key={country.code} position={[country.latitude, country.longitude]}>
        <Popup {...country} />
        <Tooltip>{country.name}</Tooltip>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
