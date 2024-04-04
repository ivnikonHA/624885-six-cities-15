import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchFavorites } from '../../store/api-actions';
import { getFavorites, getIsFavoritesLoading } from '../../store/selectors/offers-selectors';

export default function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  },[dispatch]
  );
  const offers = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getIsFavoritesLoading);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities : Favorites page</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {!isLoading && <FavoritesList offers={offers} />}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
