import cn from 'classnames';
import { Helmet } from 'react-helmet-async';

import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFavorites, getFavoritesStatus } from '../../store/selectors/offers-selectors';

export default function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getFavoritesStatus) === RequestStatus.Loading;
  const favoritesEmpty = offers.length === 0 && !isLoading;

  return (
    <div className={cn('page', {'page--favorites-empty': favoritesEmpty})}>
      <Helmet>
        <title>6 Cities : Favorites page</title>
      </Helmet>
      <Header />
      {favoritesEmpty
        ? <FavoritesEmpty />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {!isLoading && <FavoritesList offers={offers} />}
              </ul>
            </section>
          </div>
        </main>}
      <Footer />
    </div>
  );
}
