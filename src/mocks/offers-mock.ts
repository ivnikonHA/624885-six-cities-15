import { OfferType } from '../types/offers';
import { mockData } from './raw-offers';

function getMockOffers() : Array<OfferType> {
  const data = mockData;
  return data as OfferType[];
}

export {getMockOffers};
