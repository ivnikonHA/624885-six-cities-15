type offerType = {
  id: string;
  title: string;
  type: ('hotel' | 'apartment' | 'room' | 'house');
  price: number;
  previewImage: string;
  city: cityType;
  location: locationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type cityType = {
  name: ('Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf');
  location: locationType;
}

type locationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type {offerType};
