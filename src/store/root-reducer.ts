import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { favoritesSlice } from './favorites/favorites-slice';
import { offerSlice } from './offer/offer-slice';
import { offersSlice } from './offers/offers-slice';
import { reviewsSlice } from './reviews/reviews-slice';
import { userSlice } from './user/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Favorites]: favoritesSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export { rootReducer };
