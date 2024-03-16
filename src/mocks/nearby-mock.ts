import { OfferType } from '../types/offers';

const mockNearbyArray: OfferType[] = [
  {
    id: '762b15f5-1de6-4a06-a034-466534f4db5e',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 189,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.1
  },
  {
    id: 'd6ec8037-fe95-43d3-b430-a920920af5a1',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 395,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9
  },
  {
    id: 'da8ca6c5-7743-43b1-aae3-352cfda0c1dd',
    title: 'House in countryside',
    type: 'hotel',
    price: 330,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7
  },
];

export {mockNearbyArray};
