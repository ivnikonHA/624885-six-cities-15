import classNames from 'classnames';

import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeCurrentCity } from '../../store/action';

type CitiesListProps = {
  items: string[];
}

export default function CitiesList({ items }: CitiesListProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {items.map((item) => (
        <li key={item} className="locations__item">
          <a
            className={classNames('locations__item-link', 'tabs__item',
              { 'tabs__item--active': item === currentCity.name })}
            href="#"
            onClick={() => dispatch(changeCurrentCity({ city: CITIES.find((city) => city.name === item) || CITIES[0] }))}
          >
            <span>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
