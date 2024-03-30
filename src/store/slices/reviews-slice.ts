import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { ReviewsStateType } from '../../types/state';
import { fetchReviews } from '../api-actions';

const initialState: ReviewsStateType = {
  reviews: null
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

export { reviewsSlice };
