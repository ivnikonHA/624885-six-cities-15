import {address, datatype, image, lorem} from 'faker';

import { CITIES } from '../const';
import { OfferType } from '../types/offers';

export const makeFakeOffer = () : OfferType => {
  const offer: OfferType = {
    id: datatype.uuid(),
    title: lorem.sentence(),
    type: 'house',
    price: datatype.number(),
    previewImage: image.avatar(),
    city: CITIES[0],
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number()
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.float()
  };
  return offer;
};
