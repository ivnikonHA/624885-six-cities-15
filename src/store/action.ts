import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';
import { CityType, OfferType } from '../types/offers';

const changeCurrentCity = createAction<{ city: CityType }>('changeCurrentCity');
const loadOffers = createAction<{ offers: OfferType[] }>('loadOffers');
const activeOffer = createAction<{ offerId: string | undefined }>('activeOffer');
const changeSortType = createAction<{ sortType: string }>('changeSortType');
const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export { activeOffer, changeCurrentCity, changeSortType, loadOffers, requireAuthorization };
