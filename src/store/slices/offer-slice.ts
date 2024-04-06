import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { OfferStateType } from '../../types/state';
import { fetchNearbyOffers, fetchOfferByIdAction, setFavoriteById } from '../api-actions';

const initialState: OfferStateType = {
  currentOffer: null,
  nearbyOffers: [],
  isOfferDataLoading: false
};

const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(setFavoriteById.fulfilled, (state, action) => {
        const { id, isFavorite } = action.payload;
        if (state.currentOffer && id in state.currentOffer) {
          state.currentOffer.isFavorite = isFavorite;
        }
      });
  },
});

export { offerSlice };

