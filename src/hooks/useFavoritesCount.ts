import { useEffect } from 'react';

import { fetchFavorites } from '../store/api-actions';
import { useAppDispatch } from './useAppDispatch';
import { useFavorites } from './useFavorites';

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
