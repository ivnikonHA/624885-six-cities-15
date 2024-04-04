import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { FavoritesStateType } from '../../types/state';
import { fetchFavorites, setFavoriteById } from '../api-actions';

const initialState: FavoritesStateType = {
  favorites: [],
  isLoading: false,
  isError: false
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isError = true;
      })
      .addCase(setFavoriteById.fulfilled, (state, action) => {
        if(action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => item.isFavorite);
        }
      });
  },
});

export { favoritesSlice };
