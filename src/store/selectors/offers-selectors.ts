import { NameSpace } from '../../const';
import { OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].offers;
const getOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isOffersDataLoading;
const getActiveOffer = (state: State): string | undefined =>
  state[NameSpace.Offers].activeOffer;
const getSortType = (state: State): string => state[NameSpace.Offers].sortType;

export { getActiveOffer, getOffers, getOffersDataLoadingStatus, getSortType };
