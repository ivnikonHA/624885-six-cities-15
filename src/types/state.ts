import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CommentType } from './comments';
import { CityType, FullOfferType, OfferType } from './offers';
import { UserData } from './user-data';

export type FavoritesStateType = {
  favorites: OfferType[];
  isLoading: boolean;
  isSetting: boolean;
  isError: boolean;
}

export type OffersStateType = {
  currentCity: CityType;
  offers: OfferType[];
  activeOffer?: string;
  sortType: string;
  isOffersDataLoading: boolean;
}

export type OfferStateType = {
  currentOffer: FullOfferType | null;
  nearbyOffers: OfferType[];
  isOfferDataLoading: boolean;
}

export type ReviewsStateType = {
  reviews: CommentType[] | null;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
