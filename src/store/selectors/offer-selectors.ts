import { NameSpace } from '../../const';
import { FullOfferType, OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getCurrentOffer = (state: State): FullOfferType | null =>
  state[NameSpace.Offer].currentOffer;
const getNearbyOffers = (state: State): OfferType[] =>
  state[NameSpace.Offer].nearbyOffers;
const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offer].isOfferDataLoading;

export { getCurrentOffer, getNearbyOffers, getOfferDataLoadingStatus };
