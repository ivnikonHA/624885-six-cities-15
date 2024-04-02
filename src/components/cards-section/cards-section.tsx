import { memo, useCallback, useMemo } from 'react';

import { Pages } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getSortType } from '../../store/selectors/offers-selectors';
import { activeOffer } from '../../store/slices/offers-slice';
import { OfferType } from '../../types/offers';
import { sorting } from '../../utils';
import CardsList from '../cards-list/cards-list';
import SortingForm from '../sorting-form/sorting-form';

type CardsSectionProps = {
  placesCount: number;
  offers: Array<OfferType>;
  currentCity: string;
}

function CardsSection({ placesCount, offers, currentCity }: CardsSectionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCardHover = useCallback(
    (offer: OfferType | null) => {
      dispatch(activeOffer({ offerId: offer?.id }));
    }, [dispatch]
  );
  const sortType = useAppSelector(getSortType);
  const sortedOffers = useMemo(() => sorting[sortType]([...offers]), [offers, sortType]);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in {currentCity}</b>
      <SortingForm />
      <div className="cities__places-list places__list tabs__content">
        <CardsList offers={sortedOffers} page={Pages.Main} handler={handleCardHover} />
      </div>
    </section>
  );
}

const MemoizedCardsSection = memo(CardsSection);
export default MemoizedCardsSection;
