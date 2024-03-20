import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, CITIES, SortOptions } from '../const';
import { getMockOffers } from '../mocks/offers-mock';
import { InitialStateType } from '../types/state';
import { activeOffer, changeCurrentCity, changeSortType, loadOffers, requireAuthorization } from './action';

const mockOffers = getMockOffers();
const initialState: InitialStateType = {
  currentCity: CITIES[0],
  offers: mockOffers,
  activeOffer: undefined,
  sortType: SortOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(activeOffer, (state, action) => {
      state.activeOffer = action.payload.offerId;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export { reducer };
