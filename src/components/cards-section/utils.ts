import { SortOptions } from '../../const';
import { OfferType } from '../../types/offers';

const sortPriceDescending = (firstElement: OfferType, secondElement: OfferType) => secondElement.price - firstElement.price;
const sortPriceAscending = (firstElement: OfferType, secondElement: OfferType) => firstElement.price - secondElement.price;
const sortRatingDescending = (firstElement: OfferType, secondElement: OfferType) => secondElement.rating - firstElement.rating;

const sorting = {
  [SortOptions.POPULAR]: (offers: OfferType[]) => offers,
  [SortOptions.PRICE_ASCENDING]: (offers: OfferType[]) => offers.sort(sortPriceAscending),
  [SortOptions.PRICE_DESCENDING]: (offers: OfferType[]) => offers.sort(sortPriceDescending),
  [SortOptions.TOP_RATED]: (offers: OfferType[]) => offers.sort(sortRatingDescending)
};

export { sorting };
