import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { ReviewsStateType } from '../../types/state';
import { fetchReviews, postReviewAction } from '../api-actions';

const initialState: ReviewsStateType = {
  reviews: [],
  isReviewPosting: false,
  isReviewsLoading: false
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(postReviewAction.fulfilled, (state, acton) => {
        state.reviews.push(acton.payload);
        state.isReviewPosting = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewPosting = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isReviewPosting = true;
      });
  },
});

export { reviewsSlice };
