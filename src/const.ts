import { CityType } from './types/offers';

const SortOptions = {
  POPULAR: 'Popular',
  PRICE_ASCENDING: 'Price: low to high',
  PRICE_DESCENDING: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};

const CitiesListItems = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf'
} as const;

const CITIES: CityType[] = [
  {
    name: CitiesListItems.PARIS,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CitiesListItems.COLOGNE,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: CitiesListItems.BRUSSELS,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: CitiesListItems.AMSTERDAM,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: CitiesListItems.HAMBURG,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: CitiesListItems.DUSSELDORF,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

const enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:id'
}

const enum APIRoute {
  Offers = '/offers',
  Offer = '/offers/:id',
  Nearby = '/offers/:id/nearby',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/:id',
  Favorites = '/favorite',
  FavoriteById = '/favorite/:id/:status'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN'
}

const enum Pages {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places'
}

const URL_MARKER_DEFAULT = './img/pin.svg';
const URL_MARKER_CURRENT = './img/pin-active.svg';

const enum NameSpace {
  Favorites = 'FAVORITES',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  User = 'USER'
}

export { APIRoute, AppRoute, AuthorizationStatus, CITIES, CitiesListItems, NameSpace, Pages, SortOptions, URL_MARKER_CURRENT, URL_MARKER_DEFAULT };
