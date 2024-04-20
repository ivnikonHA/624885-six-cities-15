import { NameSpace } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';
import { getCurrentOffer, getNearbyOffers, getOfferDataLoadingStatus } from './offer-selectors';

describe('Offers selectors', () => {
  const state = {
    [NameSpace.Offer] : {
      currentOffer: null,
      nearbyOffers: [ makeFakeOffer() ],
      isOfferDataLoading: false
    }
  };

  it('Should return current offer from state', () => {
    const {currentOffer} = state[NameSpace.Offer];
    const result = getCurrentOffer(state);

    expect(result).toEqual(currentOffer);
  });

  it('Should return nearby offers from state', () => {
    const {nearbyOffers} = state[NameSpace.Offer];
    const result = getNearbyOffers(state);

    expect(result).toEqual(nearbyOffers);
  });

  it('Should return offer data loading status from state', () => {
    const {isOfferDataLoading} = state[NameSpace.Offer];
    const result = getOfferDataLoadingStatus(state);

    expect(result).toEqual(isOfferDataLoading);
  });
});
