import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

function Logo() : JSX.Element {
  return (
    <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>);
}

const MemoizedLogo = memo(Logo);

export default MemoizedLogo;
