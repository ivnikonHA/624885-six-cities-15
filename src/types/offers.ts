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

type FullOfferType = Omit<OfferType, 'previewImage'> & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
} | null

type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type CityType = {
  name: ('Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf');
  location: LocationType;
}

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type {CityType,FullOfferType, HostType,LocationType, OfferType};
