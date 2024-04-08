import { OfferType } from '../../types/offers';
import Card from '../card/card';

type CardsListProps = {
  offers: OfferType[];
  page: string;
  onCardHover?: (offer: OfferType | null) => void;
}

export default function CardsList({ offers, page, onCardHover }: CardsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          page={page}
          onCardHover={onCardHover}
        />
      ))}
    </>
  );
}
