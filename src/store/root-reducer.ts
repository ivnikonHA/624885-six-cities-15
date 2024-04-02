import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { offerSlice } from './slices/offer-slice';
import { offersSlice } from './slices/offers-slice';
import { reviewsSlice } from './slices/reviews-slice';
import { userSlice } from './slices/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export { rootReducer };
