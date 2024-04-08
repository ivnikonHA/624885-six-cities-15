import { RequestStatus } from '../const';
import { getFavorites, getFavoritesStatus } from '../store/selectors/offers-selectors';
import { useAppSelector } from './use-app-selector';

export function useFavorites() {
  const favorites = useAppSelector(getFavorites);
  const status = useAppSelector(getFavoritesStatus);

  return {
    count: favorites.length,
    isIdle: status === RequestStatus.Idle,
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    favorites
  };
}
