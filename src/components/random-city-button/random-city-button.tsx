import { Link } from 'react-router-dom';

import { AppRoute, CITIES } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeCurrentCity } from '../../store/slices/offers-slice';
import { getRandomNumber } from '../../utils';

export default function RandomCityButton(): JSX.Element {
  const city = CITIES[getRandomNumber(0, CITIES.length - 1)];
  const dispatch = useAppDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(changeCurrentCity({city}));
      }}
      className="locations__item-link"
      to={AppRoute.Root}
    >
      <span>{city.name}</span>
    </Link>
  );
}
