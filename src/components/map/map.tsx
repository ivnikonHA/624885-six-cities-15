import 'leaflet/dist/leaflet.css';

import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/useMap';
import { CityType, OfferType } from '../../types/offers';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedOffer: OfferType | undefined;
};

const defaultCustomIcon = new leaflet.Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new leaflet.Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      offers.forEach((offer): void => {
        leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }
        )
          .setIcon(offer.id === selectedOffer?.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
      });
    }
  });

  return <section className="cities__map map" ref={mapRef}></section>;
}
