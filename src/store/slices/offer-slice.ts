import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { OfferStateType } from '../../types/state';
import { fetchOfferByIdAction } from '../api-actions';

const initialState: OfferStateType = {
  currentOffer: null,
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
      });
  },
});

export { fetchOfferByIdAction, offerSlice };

