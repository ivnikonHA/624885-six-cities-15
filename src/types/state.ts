import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store';
import { CommentType } from './comments';
import { CityType, FullOfferType, OfferType } from './offers';
import { UserData } from './user-data';

export type FavoritesStateType = {
  favorites: OfferType[];
  status: RequestStatus;
}

export type OffersStateType = {
  currentCity: CityType;
  offers: OfferType[];
  activeOffer?: string;
  sortType: string;
  status: RequestStatus;
}

export type OfferStateType = {
  currentOffer: FullOfferType | null;
  nearbyOffers: OfferType[];
  isOfferDataLoading: boolean;
}

export type ReviewsStateType = {
  reviews: CommentType[];
  isReviewPosting: boolean;
  isReviewsLoading: boolean;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
