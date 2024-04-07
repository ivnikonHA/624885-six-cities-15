import { CitiesListItems, Pages } from '../../const';
import { OfferType } from '../../types/offers';
import CardsList from '../cards-list/cards-list';

type FavoritesListProps = {
  offers: Array<OfferType>;
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
        <CardsList offers={offers} page={Pages.Favorites} />
      </div>
    </li>);
}

const favoritesOffers = (offers: OfferType[], city: string) => offers.filter((offer) => offer.city.name === city);

export default function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  return (
    <>
      {Object.values(CitiesListItems).map((city) => (
        <FavoritesListItem key={city} offers={favoritesOffers(offers, city)} currentCity={city} />
      ))}
    </>
  );
}
