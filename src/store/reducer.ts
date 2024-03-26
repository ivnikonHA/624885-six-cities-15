import { createReducer } from '@reduxjs/toolkit';

import { CITIES, SortOptions } from '../const';
import { InitialStateType } from '../types/state';
import { activeOffer, changeCurrentCity, changeSortType, loadOffers, setLoadingOffersStatus, } from './action';

const initialState: InitialStateType = {
  currentCity: CITIES[0],
  offers: [],
  activeOffer: undefined,
  sortType: SortOptions.POPULAR,
  isOffersDataLoading: false
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
    .addCase(setLoadingOffersStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export { reducer };
