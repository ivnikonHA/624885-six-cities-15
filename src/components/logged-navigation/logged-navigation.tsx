import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useFavoriteCount } from '../../hooks/use-favorites-count';
import { logoutAction } from '../../store/api-actions';
import { getUserData } from '../../store/selectors/user-selectors';

export function LoggedNavigation() {
  const userData = useAppSelector(getUserData);
  const numberOfFavorites = useFavoriteCount();
  const dispatch = useAppDispatch();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          to={AppRoute.Favorites}
          className="header__nav-link header__nav-link--profile"
        >
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{
              backgroundImage: `url(${userData.avatarUrl})`,
              borderRadius: '50%'
            }}
          >
          </div>
          <span className="header__user-name user__name">
            {userData.email}
          </span>
          <span className="header__favorite-count">{numberOfFavorites}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          className="header__nav-link"
          to={AppRoute.Login}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}
