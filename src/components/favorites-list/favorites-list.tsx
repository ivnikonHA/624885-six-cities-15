import Card from '../../components/card/card';
import { CitiesListItems, Pages } from '../../const';
import { offerType } from '../../types/offers';

type favoritesListProps = {
  offers: Array<offerType>;
}

function CitiesList({ offers }: favoritesListProps) {
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

type favoritesListItemProps = {
  offers: Array<offerType>;
  currentCity: string;
}

function FavoritesListItem({ offers, currentCity }: favoritesListItemProps) {
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

export default function FavoritesList({ offers }: favoritesListProps): JSX.Element {
  return (
    <>
      {Object.values(CitiesListItems).map((city) => (
        <FavoritesListItem key={city} offers={offers.filter((offer) => offer.city.name === city)} currentCity={city} />
      ))}
    </>
  );
}
