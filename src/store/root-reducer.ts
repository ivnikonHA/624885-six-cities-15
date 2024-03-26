import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { offersSlice } from './slices/offers-slice';
import { userSlice } from './slices/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export { rootReducer };
