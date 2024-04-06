import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, RequestStatus } from '../../const';
import { FavoritesStateType } from '../../types/state';
import { fetchFavorites, logoutAction, setFavoriteById } from '../api-actions';

const initialState: FavoritesStateType = {
  favorites: [],
  status: RequestStatus.Idle
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(setFavoriteById.fulfilled, (state, action) => {
        if(action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});

export { favoritesSlice };
