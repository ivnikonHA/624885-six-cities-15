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
};

const enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:id'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH'
}

const enum Pages {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places'
}

const URL_MARKER_DEFAULT = './img/pin.svg';
const URL_MARKER_CURRENT = './img/pin-active.svg';

export {AppRoute, AuthorizationStatus, CitiesListItems, Pages,SortOptions, URL_MARKER_CURRENT, URL_MARKER_DEFAULT};
