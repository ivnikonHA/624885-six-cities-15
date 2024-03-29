import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CityType, FullOfferType, OfferType } from './offers';
import { UserData } from './user-data';

export type OffersStateType = {
  currentCity: CityType;
  offers: OfferType[];
  activeOffer?: string;
  sortType: string;
  isOffersDataLoading: boolean;
}

export type OfferStateType = {
  currentOffer: FullOfferType | null;
  isOfferDataLoading: boolean;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
