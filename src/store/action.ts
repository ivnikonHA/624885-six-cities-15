import { createAction } from '@reduxjs/toolkit';

import { CityType, OfferType } from '../types/offers';

export const changeCurrentCity = createAction<{ city: CityType }>('changeCurrentCity');
export const loadOffers = createAction<{ offers: OfferType[] }>('loadOffers');
export const activeOffer = createAction<{ offerId: string | undefined }>('activeOffer');
export const changeSortType = createAction<{ sortType: string }>('changeSortType');
