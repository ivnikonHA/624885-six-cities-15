import { NameSpace } from '../../const';
import { OfferType } from '../../types/offers';
import { State } from '../../types/state';

const getFavorites = (state: Pick<State,NameSpace.Favorites>): OfferType[] => state[NameSpace.Favorites].favorites;
const getFavoritesStatus = (state: Pick<State,NameSpace.Favorites>) => state[NameSpace.Favorites].status;

export { getFavorites, getFavoritesStatus};
