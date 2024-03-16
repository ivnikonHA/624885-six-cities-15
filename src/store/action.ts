import { createAction } from '@reduxjs/toolkit';

import { CityType } from '../types/offers';

export const changeCurrentCity = createAction<{city: CityType}>('changeCurrentCity');
export const loadOffers = createAction('loadOffers');
