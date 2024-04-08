import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';

import { AppRoute, RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import LoginPage from '../../pages/login-page/login-page';
import { loadMainPageData } from '../../pages/main-page/loader';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { getOffersDataLoadingStatus } from '../../store/selectors/offers-selectors';
import PrivateRoute from '../private-route/private-route';
import PublicRoute from '../public-route/public-route';

export default function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus) === RequestStatus.Loading;

  if (isOffersDataLoading) {
    return <LoadingPage />;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
          loader={loadMainPageData}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.OfferId}
          element={<OfferPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </>
    )
  );

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );

}
