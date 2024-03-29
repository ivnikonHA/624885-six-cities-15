import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';

import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { FullOfferType, OfferType } from '../types/offers';
import { UserData } from '../types/user-data';

const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {extra: AxiosInstance}
>('fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  return data;
});

const fetchOfferByIdAction = createAsyncThunk<
  FullOfferType,
  string,
  {extra: AxiosInstance}
>('fetchOfferById', async (id, {extra: api}) => {
  const { data } = await api.get<FullOfferType>(generatePath(APIRoute.Offer, {id}));
  return data;
});

const fetchNearbyOffers = createAsyncThunk<
  OfferType[],
  string,
  {extra: AxiosInstance}
>('fetchNearbyOffers', async (id, {extra: api}) => {
  const { data } = await api.get<OfferType[]>(generatePath(APIRoute.Nearby, {id}));
  return data;
});

const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {extra: AxiosInstance}
>('checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

const loginAction = createAsyncThunk<UserData, AuthData, {extra: AxiosInstance}>(
  'login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export {
  checkAuthAction,
  fetchNearbyOffers,
  fetchOfferByIdAction,
  fetchOffersAction,
  loginAction,
  logoutAction
};
