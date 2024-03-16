import { createReducer } from '@reduxjs/toolkit';

import { CITIES } from '../const';
import { getMockOffers } from '../mocks/offers-mock';
import { changeCurrentCity } from './action';

const mockOffers = getMockOffers();
const initialState = {
  currentCity: CITIES[0],
  offers: mockOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    });
});

export { reducer };
