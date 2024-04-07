import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { favoritesSlice } from './slices/favorites-slice';
import { offerSlice } from './slices/offer-slice';
import { offersSlice } from './slices/offers-slice';
import { reviewsSlice } from './slices/reviews-slice';
import { userSlice } from './slices/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Favorites]: favoritesSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export { rootReducer };
