import { useState } from 'react';
import { Nullable } from 'vitest';

import Card from '../../components/card/card';
import SortingForm from '../../components/sorting-form/sorting-form';
import { Pages, SortOptions } from '../../const';
import { OfferType } from '../../types/offers';

type CardsListProps = {
  placesCount: number;
  offers: Array<OfferType>;
}

export default function CardsList({ placesCount, offers }: CardsListProps): JSX.Element {
  const isSortingFormOpened = false;
  const [, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleCardHover = (offer: OfferType | null) => {
    setActiveOffer(offer);
  };
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>
      <SortingForm
        items={Object.values(SortOptions)}
        currentItem={SortOptions.PRICE_ASCENDING}
        isOpened={isSortingFormOpened}
      />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            page={Pages.Main}
            handler={handleCardHover}
          />
        ))}
      </div>
    </section>
  );
}
