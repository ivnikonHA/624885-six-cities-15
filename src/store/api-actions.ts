import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';

import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { CommentType, ReviewType } from '../types/comments';
import { FavoriteType } from '../types/favorites';
import { FullOfferType, OfferType } from '../types/offers';
import { UserData } from '../types/user-data';

const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {extra: AxiosInstance}
>('offers/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  return data;
});

const fetchOfferByIdAction = createAsyncThunk<
  FullOfferType,
  string,
  {extra: AxiosInstance}
>('offer/fetchOfferById', async (id, {extra: api}) => {
  const { data } = await api.get<FullOfferType>(generatePath(APIRoute.Offer, {id}));
  return data;
});

const fetchNearbyOffers = createAsyncThunk<
  OfferType[],
  string,
  {extra: AxiosInstance}
>('offer/fetchNearbyOffers', async (id, {extra: api}) => {
  const { data } = await api.get<OfferType[]>(generatePath(APIRoute.Nearby, {id}));
  return data;
});

const fetchReviews = createAsyncThunk<
  CommentType[],
  string,
  {extra: AxiosInstance}
>('reviews/fetchReviews', async (id, {extra: api}) => {
  const { data } = await api.get<CommentType[]>(generatePath(APIRoute.Reviews, {id}));
  return data;
});

const postReviewAction = createAsyncThunk<
  CommentType,
  ReviewType,
  {extra: AxiosInstance}
>('reviews/postReview', async (reviewMessage, {extra: api}) => {
  const { data } = await api.post<CommentType>(generatePath(APIRoute.Reviews, {id: reviewMessage.id}), { comment: reviewMessage.comment, rating: reviewMessage.rating});
  return data;
});

const fetchFavorites = createAsyncThunk<
  OfferType[],
  undefined,
  {extra: AxiosInstance}
>('favorites/fetchFavorites', async (_arg, {extra: api}) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Favorites);
  return data;
});

const setFavoriteById = createAsyncThunk<
  OfferType,
  FavoriteType,
  {extra: AxiosInstance}
>('favorites/setFavoriteById', async ({id, isFavorite}, {extra: api}) => {
  const status = Number(isFavorite).toString();
  const { data } = await api.post<OfferType>(generatePath(APIRoute.FavoriteById, {id, status}), {});
  return data;
});

const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {extra: AxiosInstance}
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

const loginAction = createAsyncThunk<UserData, AuthData, {extra: AxiosInstance}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout).then(dropToken);
  }
);

export {
  checkAuthAction,
  fetchFavorites,
  fetchNearbyOffers,
  fetchOfferByIdAction,
  fetchOffersAction,
  fetchReviews,
  loginAction,
  logoutAction,
  postReviewAction,
  setFavoriteById
};
