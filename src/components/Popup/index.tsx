import { Popup as LeafletPopup } from 'react-leaflet';
import { ICountryWithCoords } from '@/types/types';

const Popup = ({ emoji, name, details }: ICountryWithCoords): JSX.Element => (
  <LeafletPopup minWidth={200}>
    <h2 className="w-full text-center flex items-center justify-center gap-2 text-base font-semibold w-full">
      <span className="text-4xl">{emoji}</span> {name}
    </h2>
    <ul className="p-2 divide-y">
      {Object.entries(details).map(([key, value]) => (
        <li key={key} className="flex gap-2 items-center">
          <span className=" w-2/6 text-left font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          <span className="flex w-4/6  items-center p-1 text-left">{value}</span>
        </li>
      ))}
    </ul>
  </LeafletPopup>
);

export default Popup;
