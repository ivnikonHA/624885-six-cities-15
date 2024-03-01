import { Helmet } from 'react-helmet-async';

import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { CitiesListItems } from '../../const';
import { offerType } from '../../types/offers';
import CardsList from '../../components/cards-list/cards-list';


type MainPageProps = {
  placesCount: number;
  offers: Array<offerType>;
}

export default function MainPage({placesCount, offers}:MainPageProps) : JSX.Element {
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
            <CitiesList items={Object.values(CitiesListItems)} currentItem={CitiesListItems.BRUSSELS} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CardsList placesCount={placesCount} offers={offers} />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
