import { memo, useCallback, useMemo } from 'react';

import { Pages } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getSortType } from '../../store/offers/offers-selectors';
import { activeOffer } from '../../store/offers/offers-slice';
import { OfferType } from '../../types/offers';
import CardsList from '../cards-list/cards-list';
import SortingForm from '../sorting-form/sorting-form';
import { sorting } from './utils';

type CardsSectionProps = {
  offers: Array<OfferType>;
  currentCity: string;
}

function CardsSection({ offers, currentCity }: CardsSectionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCardHover = useCallback(
    (offer: OfferType | null) => {
      dispatch(activeOffer({ offerId: offer?.id }));
    }, [dispatch]
  );
  const sortType = useAppSelector(getSortType);
  const sortedOffers = useMemo(() => sorting[sortType]([...offers]), [offers, sortType]);
  const placesCount = offers.length;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} {placesCount === 1 ? 'place' : 'places'} to stay in {currentCity}</b>
      <SortingForm />
      <div className="cities__places-list places__list tabs__content">
        <CardsList offers={sortedOffers} page={Pages.Main} onCardHover={handleCardHover} />
      </div>
    </section>
  );
}

const MemoizedCardsSection = memo(CardsSection);
export default MemoizedCardsSection;
