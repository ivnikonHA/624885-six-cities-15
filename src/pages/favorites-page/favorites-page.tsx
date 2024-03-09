import { Helmet } from 'react-helmet-async';

import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { OfferType } from '../../types/offers';

type FavoritesPageProps = {
  offers: Array<OfferType>;
}

export default function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities : Favorites page</title>
      </Helmet>
      <Header></Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesList offers={offers} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
