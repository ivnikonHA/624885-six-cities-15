import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthorizationStatus } from '../../store/user/user-selectors';
import { LoggedNavigation } from '../logged-navigation/logged-navigation';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  const isAuthorized =
    useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {isAuthorized ? <LoggedNavigation />
              :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul> }
          </nav>
        </div>
      </div>
    </header>
  );
}
const MemoizedHeader = memo(Header);
export default MemoizedHeader;
