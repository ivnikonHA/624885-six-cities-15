import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { CITIES, NameSpace, RequestStatus, SortOptions } from '../../const';
import { CityType } from '../../types/offers';
import { OffersStateType } from '../../types/state';
import { fetchOffersAction, loginAction, logoutAction, setFavoriteById } from '../api-actions';

const initialState: OffersStateType = {
  currentCity: CITIES[0],
  offers: [],
  activeOffer: undefined,
  sortType: SortOptions.POPULAR,
  status: RequestStatus.Idle,
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
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
        toast.error('Error loading offers data');
      })
      .addCase(setFavoriteById.fulfilled, (state, action) => {
        const offerToChange = action.payload;
        const foundOffer = state.offers.find((item) => item.id === offerToChange.id);
        if(foundOffer) {
          foundOffer.isFavorite = offerToChange.isFavorite;
        }
      })
      .addCase(loginAction.fulfilled, (state) => {
        if(state.status !== RequestStatus.Idle) {
          state.status = RequestStatus.Idle;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if(state.status !== RequestStatus.Idle) {
          state.status = RequestStatus.Idle;
        }
      });
  },
});

const { changeCurrentCity, changeSortType, activeOffer } = offersSlice.actions;

export { activeOffer, changeCurrentCity, changeSortType, offersSlice };
