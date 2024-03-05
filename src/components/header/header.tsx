import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import getAuthorization from '../../mocks/authorization-mock';
import Logo from '../logo/logo';

export default function Header() : JSX.Element {
  const isAuthorized = getAuthorization() === AuthorizationStatus.Auth;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={isAuthorized ? AppRoute.Favorites : AppRoute.Login}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {isAuthorized ? (
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>

                    </>)
                    : <span className="header__login">Sign in</span> }
                </Link>
              </li>
              {isAuthorized &&
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
