import 'leaflet/dist/leaflet.css';

import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';

import useMap from '../../hooks/useMap';
import { CityType, OfferType } from '../../types/offers';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedOffer: OfferType | undefined;
};

export default function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

  return <section className="cities__map map" ref={mapRef}></section>;
}
