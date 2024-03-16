import { Helmet } from 'react-helmet-async';

import CardsSection from '../../components/cards-section/cards-section';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { CitiesListItems } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function MainPage(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const placesCount = offers.length;
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList items={Object.values(CitiesListItems)} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CardsSection placesCount={placesCount} offers={offers} currentCity={currentCity} />
            <div className="cities__right-section">
              <Map
                city={offers[0].city}
                offers={offers}
                selectedOffer={offers[0]}
                page='cities'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
