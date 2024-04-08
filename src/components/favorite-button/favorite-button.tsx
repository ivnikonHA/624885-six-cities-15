import cn from 'classnames';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAuth } from '../../hooks/use-auth';
import { setFavoriteById } from '../../store/api-actions';

type FavoriteButtonProps = {
  page: 'place-card' | 'offer';
  offerId: string;
  isFavorite: boolean;
}

function FavoriteButtonComponent({page, offerId, isFavorite}: FavoriteButtonProps): JSX.Element {
  const [isInFavoriteStatus, toggleFavoriteStatus] = useState(isFavorite);
  const navigate = useNavigate();
  const buttonClass = cn(
    `${page}__bookmark-button button`,
    {[`${page}__bookmark-button--active`]: isInFavoriteStatus}
  );
  const buttonDimensions = {
    'place-card': {width: '18', height: '19'},
    'offer':  {width: '31', height: '32'},
  };
  const dispatch = useAppDispatch();
  const isAuthorized = useAuth();

  const handleFavoriteButtonClick = () => {
    if(!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(setFavoriteById({id: offerId, isFavorite: !isInFavoriteStatus}));
    toggleFavoriteStatus((prevStatus) => !prevStatus);
  };

  return (
    <button
      onClick={handleFavoriteButtonClick}
      className={buttonClass}
      type="button"
    >
      <svg
        className={`${page}__bookmark-icon`}
        width={buttonDimensions[page].width}
        height={buttonDimensions[page].height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

const FavoriteButton = memo(FavoriteButtonComponent);
export default FavoriteButton;
