import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { offerSlice } from './slices/offer-slice';
import { offersSlice } from './slices/offers-slice';
import { userSlice } from './slices/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer
});

export { rootReducer };
