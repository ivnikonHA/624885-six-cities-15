import Card from '../../components/card/card';
import Header from '../../components/header/header';
import SortingForm from '../../components/sorting-form/sorting-form';
import { SortOptions } from '../../const';
import { mockOffers } from '../../mocks/offers-mock';

type MainPageProps = {
  placesCount: number;
}

export default function MainPage({placesCount}:MainPageProps) : JSX.Element {
  const isSortingFormOpened = false;
  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <SortingForm
                items={Object.values(SortOptions)}
                currentItem={SortOptions.PRICE_ASCENDING}
                isOpened= {isSortingFormOpened}
              />
              <div className="cities__places-list places__list tabs__content">
                {mockOffers().map((offer) => (
                  <Card
                    key={offer.id}
                    title={offer.title}
                    type={offer.type}
                    price={offer.price}
                    isFavorite={offer.isFavorite}
                    isPremium={offer.isPremium}
                    previewImage={offer.previewImage}
                    rating={offer.rating}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
