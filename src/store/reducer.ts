import { createReducer } from '@reduxjs/toolkit';

import { CITIES } from '../const';
import { getMockOffers } from '../mocks/offers-mock';
import { activeOffer, changeCurrentCity } from './action';

const mockOffers = getMockOffers();
const initialState = {
  currentCity: CITIES[0],
  offers: mockOffers,
  activeOffer: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(activeOffer, (state, action) => {
      state.activeOffer = action.payload.offerId;
    });
});

export { reducer };
