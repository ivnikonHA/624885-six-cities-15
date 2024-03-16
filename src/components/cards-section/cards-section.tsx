import { Pages, SortOptions } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { activeOffer } from '../../store/action';
import { OfferType } from '../../types/offers';
import CardsList from '../cards-list/cards-list';
import SortingForm from '../sorting-form/sorting-form';

type CardsSectionProps = {
  placesCount: number;
  offers: Array<OfferType>;
  currentCity: string;
}

export default function CardsSection({ placesCount, offers, currentCity }: CardsSectionProps): JSX.Element {
  const isSortingFormOpened = false;
  //const [, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const dispatch = useAppDispatch();
  const handleCardHover = (offer: OfferType | null) => {
    dispatch(activeOffer({ offerId: offer?.id }));
  };
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in {currentCity}</b>
      <SortingForm
        items={Object.values(SortOptions)}
        currentItem={SortOptions.PRICE_ASCENDING}
        isOpened={isSortingFormOpened}
      />
      <div className="cities__places-list places__list tabs__content">
        <CardsList offers={offers} page={Pages.Main} handler={handleCardHover} />
      </div>
    </section>
  );
}
