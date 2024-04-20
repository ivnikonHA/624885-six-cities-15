import { NameSpace, RequestStatus } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';
import { getFavorites, getFavoritesStatus } from './favorites-selectors';

describe('Favorites selectors', () => {
  const state = {
    [NameSpace.Favorites] : {
      favorites: [ makeFakeOffer() ],
      status: RequestStatus.Idle
    }
  };

  it('Should return favorites loading status from state', () => {
    const { status } = state[NameSpace.Favorites];
    const result = getFavoritesStatus(state);

    expect(result).toBe(status);
  });

  it('Should return favorites offer from state', () => {
    const { favorites } = state[NameSpace.Favorites];
    const result = getFavorites(state);

    expect(result).toEqual(favorites);
  });
});


