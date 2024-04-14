import 'leaflet/dist/leaflet.css';

import leaflet from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { CityType } from '../types/offers';

type MapType = leaflet.Map | null;

export default function useMap(city: CityType, mapRef: MutableRefObject<HTMLElement | null>): MapType {
  const [map, setMap] = useState<MapType>(null);
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new leaflet.Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        scrollWheelZoom: false,
        zoom: city.location.zoom
      });
      const layer = new leaflet.TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);
  return map;
}
