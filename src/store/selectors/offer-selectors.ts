import { NameSpace } from '../../const';
import { FullOfferType } from '../../types/offers';
import { State } from '../../types/state';

const getCurrentOffer = (state: State): FullOfferType =>
  state[NameSpace.Offer].currentOffer;
const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offer].isOfferDataLoading;

export { getCurrentOffer, getOfferDataLoadingStatus };
