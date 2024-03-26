import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { OfferType } from '../types/offers';
import { AppDispatch } from '../types/state';
import { UserData } from '../types/user-data';

type ApiThunkConfigObject = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  ApiThunkConfigObject
>('fetchOffers', async (_arg, { extra: api }) => {
  const res = await api.get<OfferType[]>(APIRoute.Offers);
  return res.data;
});

const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  ApiThunkConfigObject
>('checkAuth', async (_arg, { extra: api }) => {
  const res = await api.get<UserData>(APIRoute.Login);
  return res.data;
});

const loginAction = createAsyncThunk<UserData, AuthData, ApiThunkConfigObject>(
  'login',
  async ({ login: email, password }, { extra: api }) => {
    const res = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(res.data.token);
    return res.data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, ApiThunkConfigObject>(
  'logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export { checkAuthAction, fetchOffersAction, loginAction, logoutAction };
