import { createReducer } from '@reduxjs/toolkit';

import { CITIES, SortOptions } from '../const';
import { getMockOffers } from '../mocks/offers-mock';
import { CityType, OfferType } from '../types/offers';
import { activeOffer, changeCurrentCity, changeSortType } from './action';

const mockOffers = getMockOffers();
type initialStateType = {
  currentCity: CityType;
  offers: OfferType[];
  activeOffer: string | undefined;
  sortType: string;
}
const initialState: initialStateType = {
  currentCity: CITIES[0],
  offers: mockOffers,
  activeOffer: undefined,
  sortType: SortOptions.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(activeOffer, (state, action) => {
      state.activeOffer = action.payload.offerId;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export { reducer };
