type OfferType = {
  id: string;
  title: string;
  type: ('hotel' | 'apartment' | 'room' | 'house');
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type CityType = {
  name: ('Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf');
  location: LocationType;
}

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type {CityType,OfferType};
