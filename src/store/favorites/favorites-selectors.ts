import { NameSpace } from '../../const';
import { OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getFavorites = (state: State): OfferType[] => state[NameSpace.Favorites].favorites;
const getFavoritesStatus = (state: State) => state[NameSpace.Favorites].status;

export { getFavorites, getFavoritesStatus};
