import cn from 'classnames';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import CardsSection from '../../components/cards-section/cards-section';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import MainEmpty from '../../components/main-empty/main-empty';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getActiveOffer, getCurrentCity, getOffers } from '../../store/selectors/offers-selectors';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const filteredOffers = useMemo(() => (offers
    .filter((offer) => offer.city.name === currentCity.name)),[currentCity.name, offers]);
  const activeOffer = useAppSelector(getActiveOffer);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className={cn('page__main page__main--index', {'page__main--index-empty': filteredOffers.length === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length === 0 ? <MainEmpty />
            :
            <div className="cities__places-container container">
              <CardsSection
                offers={filteredOffers}
                currentCity={currentCity.name}
              />
              <div className="cities__right-section">
                <Map
                  city={currentCity}
                  offers={filteredOffers}
                  selectedOffer={activeOffer}
                  page='cities'
                />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
