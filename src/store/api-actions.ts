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
  const res = await api.get<OfferType[]>(APIRoute.Offers);
  return res.data;
});

const fetchOfferByIdAction = createAsyncThunk<
  FullOfferType,
  string,
  {extra: AxiosInstance}
>('fetchOfferById', async (id, {extra: api}) => {
  const res = await api.get<FullOfferType>(generatePath(APIRoute.Offer, {id}));
  return res.data;
});

const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {extra: AxiosInstance}
>('checkAuth', async (_arg, { extra: api }) => {
  const res = await api.get<UserData>(APIRoute.Login);
  return res.data;
});

const loginAction = createAsyncThunk<UserData, AuthData, {extra: AxiosInstance}>(
  'login',
  async ({ login: email, password }, { extra: api }) => {
    const res = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(res.data.token);
    return res.data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export { checkAuthAction, fetchOfferByIdAction, fetchOffersAction, loginAction, logoutAction };
