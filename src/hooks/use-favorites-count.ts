import { useEffect } from 'react';

import { fetchFavorites } from '../store/api-actions';
import { useAppDispatch } from './use-app-dispatch';
import { useFavorites } from './use-favorites';

export function useFavoriteCount() {
  const { count, isIdle } = useFavorites();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isIdle) {
      dispatch(fetchFavorites());
    }
  },[isIdle, dispatch]);

  return count;
}
