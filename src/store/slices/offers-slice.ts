import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CITIES, NameSpace, SortOptions } from '../../const';
import { CityType } from '../../types/offers';
import { OffersStateType } from '../../types/state';
import { fetchOffersAction, setFavoriteById } from '../api-actions';

const initialState: OffersStateType = {
  currentCity: CITIES[0],
  offers: [],
  activeOffer: undefined,
  sortType: SortOptions.POPULAR,
  isOffersDataLoading: false,
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCurrentCity: (state, action: PayloadAction<{ city: CityType }>) => {
      state.currentCity = action.payload.city;
    },
    changeSortType: (state, action: PayloadAction<{ sortType: string }>) => {
      state.sortType = action.payload.sortType;
    },
    activeOffer: (state, action: PayloadAction<{ offerId: string | undefined }>) => {
      state.activeOffer = action.payload.offerId;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(setFavoriteById.fulfilled, (state, action) => {
        const offerToChange = action.payload;
        const foundOffer = state.offers.find((item) => item.id === offerToChange.id);
        if(foundOffer) {
          foundOffer.isFavorite = offerToChange.isFavorite;
        }
      });
  },
});

const { changeCurrentCity, changeSortType, activeOffer } = offersSlice.actions;

export { activeOffer, changeCurrentCity, changeSortType, offersSlice };
