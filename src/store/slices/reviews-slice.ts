import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { ReviewsStateType } from '../../types/state';
import { fetchReviews, postReviewAction } from '../api-actions';

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
      })
      .addCase(postReviewAction.fulfilled, (state, acton) => {
        state.reviews?.push(acton.payload);
      });
  },
});

export { reviewsSlice };
