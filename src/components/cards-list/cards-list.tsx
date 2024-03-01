import { offerType } from '../../types/offers';
import SortingForm from '../../components/sorting-form/sorting-form';
import Card from '../../components/card/card';
import { SortOptions } from '../../const';

type cardsListProps = {
  placesCount: number;
  offers: Array<offerType>;
}

export default function CardsList({placesCount, offers}:cardsListProps) : JSX.Element {
  const isSortingFormOpened = false;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>
      <SortingForm
        items={Object.values(SortOptions)}
        currentItem={SortOptions.PRICE_ASCENDING}
        isOpened= {isSortingFormOpened}
      />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
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
  );
}
