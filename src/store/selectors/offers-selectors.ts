import { NameSpace } from '../../const';
import { CityType, OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].offers;
const getOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isOffersDataLoading;
const getActiveOffer = (state: State): string | undefined =>
  state[NameSpace.Offers].activeOffer;
const getCurrentCity = (state: State): CityType =>
  state[NameSpace.Offers].currentCity;
const getSortType = (state: State): string => state[NameSpace.Offers].sortType;
const getFavorites = (state: State): OfferType[] => state[NameSpace.Favorites].favorites;
const getIsFavoritesLoading = (state: State) => state[NameSpace.Favorites].isLoading;

export {
  getActiveOffer,
  getCurrentCity,
  getFavorites,
  getIsFavoritesLoading,
  getOffers,
  getOffersDataLoadingStatus,
  getSortType,
};
