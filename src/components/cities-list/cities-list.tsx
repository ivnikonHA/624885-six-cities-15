import cn from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import { CITIES } from '../../const';
import { CitiesListItems } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentCity } from '../../store/selectors/offers-selectors';
import { changeCurrentCity } from '../../store/slices/offers-slice';

function CitiesList(): JSX.Element {
  const citiesNamesList = Object.values(CitiesListItems);
  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {citiesNamesList.map((item) => (
        <li key={item} className="locations__item">
          <Link
            className={cn('locations__item-link', 'tabs__item', {
              'tabs__item--active': item === currentCity.name,
            })}
            to=''
            onClick={() =>
              dispatch(
                changeCurrentCity({
                  city: CITIES.find((city) => city.name === item) || CITIES[0],
                })
              )}
          >
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);
export default MemoizedCitiesList;
