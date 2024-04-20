import { NameSpace } from '../../const';
import { FullOfferType, OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getCurrentOffer = (state: Pick<State,NameSpace.Offer>): FullOfferType | null =>
  state[NameSpace.Offer].currentOffer;
const getNearbyOffers = (state: Pick<State,NameSpace.Offer>): OfferType[] =>
  state[NameSpace.Offer].nearbyOffers;
const getOfferDataLoadingStatus = (state: Pick<State,NameSpace.Offer>): boolean =>
  state[NameSpace.Offer].isOfferDataLoading;

export { getCurrentOffer, getNearbyOffers, getOfferDataLoadingStatus };
