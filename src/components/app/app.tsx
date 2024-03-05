import { useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../const';
import getAuthorization from '../../mocks/authorization-mock';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { offerType } from '../../types/offers';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesCount: number;
  offers: Array<offerType>;
}

export default function App({ placesCount, offers }: AppProps): JSX.Element {
  const favoriteOffers = useMemo(
    () => offers.filter((offer) => offer.isFavorite),
    [offers]);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage placesCount={placesCount} offers={offers}></MainPage>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={getAuthorization()}>
                <FavoritesPage offers={favoriteOffers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.OfferId}
            element={<OfferPage offers={offers} />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
