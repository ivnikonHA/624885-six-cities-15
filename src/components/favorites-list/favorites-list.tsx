import Card from '../../components/card/card';
import { CitiesListItems, Pages } from '../../const';
import { OfferType } from '../../types/offers';

type FavoritesListProps = {
  offers: Array<OfferType>;
}

function CitiesList({ offers }: FavoritesListProps) {
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          page={Pages.Main}
        />
      ))}
    </>
  );
}

type FavoritesListItemProps = {
  offers: Array<OfferType>;
  currentCity: string;
}

function FavoritesListItem({ offers, currentCity }: FavoritesListItemProps) {
  if (offers.length === 0) {
    return '';
  }
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{currentCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CitiesList offers={offers} />
      </div>
    </li>);
}

export default function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  return (
    <>
      {Object.values(CitiesListItems).map((city) => (
        <FavoritesListItem key={city} offers={offers.filter((offer) => offer.city.name === city)} currentCity={city} />
      ))}
    </>
  );
}
