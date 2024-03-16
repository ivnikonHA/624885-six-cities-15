import { createAction } from '@reduxjs/toolkit';

export const changeCurrentCity = createAction<{city: string}>('changeCurrentCity');
export const loadOffers = createAction('loadOffers');
