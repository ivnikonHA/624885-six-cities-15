import { Helmet } from 'react-helmet-async';

import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { CitiesListItems } from '../../const';
import { OfferType } from '../../types/offers';


type MainPageProps = {
  placesCount: number;
  offers: Array<OfferType>;
}

export default function MainPage({ placesCount, offers }: MainPageProps): JSX.Element {
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
              <Map city={offers[0].city} offers={offers} selectedOffer={offers[0]} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
