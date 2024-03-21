import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CityType, OfferType } from './offers';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  currentCity: CityType;
  offers: OfferType[];
  activeOffer?: string;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
}
