import { OfferType } from '../../types/offers';
import Card from '../card/card';

type CardsListProps = {
  offers: OfferType[];
  page: string;
  handler?: (offer: OfferType | null) => void;
}

export default function CardsList({ offers, page, handler }: CardsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          page={page}
          handler={handler}
        />
      ))}
    </>
  );
}
