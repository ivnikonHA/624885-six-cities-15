import { createAction } from '@reduxjs/toolkit';

import { CityType, OfferType } from '../types/offers';

const changeCurrentCity = createAction<{ city: CityType }>('changeCurrentCity');
const loadOffers = createAction<{ offers: OfferType[] }>('loadOffers');
const activeOffer = createAction<{ offerId: string | undefined }>('activeOffer');
const changeSortType = createAction<{ sortType: string }>('changeSortType');
const setLoadingOffersStatus = createAction<boolean>('setLoadingOffersStatus');

export { activeOffer, changeCurrentCity, changeSortType, loadOffers, setLoadingOffersStatus };
