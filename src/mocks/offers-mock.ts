import { CITIES } from '../const';
import { OfferType } from '../types/offers';
import { mockData } from './raw-offers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockOfferArray: OfferType[] = [
  {
    id: '6c78ef29-5920-4416-8212-3692a57b0b21',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 234,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: CITIES[0],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '0a4a8329-519e-4553-b463-d00a35f24a46',
    title: 'Wood and stone place',
    type: 'house',
    price: 196,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: CITIES[0],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.5
  },
  {
    id: '8c2e7fe7-73bc-4444-8e1a-9abcc2c025ff',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 215,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: CITIES[0],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8
  },
  {
    id: 'add865ee-2d16-46b5-a1e4-9b5823ee58b9',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 239,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: CITIES[0],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2
  }
];

function getMockOffers() : Array<OfferType> {
  const data = mockData;
  return data as OfferType[];
}

export {getMockOffers};
