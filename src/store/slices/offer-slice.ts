import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        toast.error('Error loading offer data.');
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, () => {
        toast.error('Error loading nearby offers data.');
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

