import { createReducer } from '@reduxjs/toolkit';

import { CitiesListItems } from '../const';
import { getMockOffers } from '../mocks/offers-mock';
import { changeCurrentCity } from './action';

const initialState = {
  currentCity: CitiesListItems.PARIS,
  offers: getMockOffers()
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    });
});

export { reducer };
