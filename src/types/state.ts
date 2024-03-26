import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CityType, OfferType } from './offers';
import { UserData } from './user-data';

export type InitialStateType = {
  currentCity: CityType;
  offers: OfferType[];
  activeOffer?: string;
  sortType: string;
  isOffersDataLoading: boolean;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
