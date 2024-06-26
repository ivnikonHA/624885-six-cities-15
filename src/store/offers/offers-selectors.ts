import { NameSpace, RequestStatus } from '../../const';
import { CityType, OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].offers;
const getOffersDataLoadingStatus = (state: State): RequestStatus =>
  state[NameSpace.Offers].status;
const getActiveOffer = (state: State): string | undefined =>
  state[NameSpace.Offers].activeOffer;
const getCurrentCity = (state: State): CityType =>
  state[NameSpace.Offers].currentCity;
const getSortType = (state: State): string => state[NameSpace.Offers].sortType;

export {
  getActiveOffer,
  getCurrentCity,
  getOffers,
  getOffersDataLoadingStatus,
  getSortType,
};
