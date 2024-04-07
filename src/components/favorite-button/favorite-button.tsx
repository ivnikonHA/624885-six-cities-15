import cn from 'classnames';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setFavoriteById } from '../../store/api-actions';
import { getIsAuthorized } from '../../store/selectors/user-selectors';

type FavoriteButtonProps = {
  page: 'place-card' | 'offer';
  offerId: string;
  isFavorite: boolean;
}

function FavoriteButtonComponent({page, offerId, isFavorite}: FavoriteButtonProps): JSX.Element {
  const [isSet, toggleStatus] = useState(isFavorite);
  const navigate = useNavigate();
  const buttonClass = cn(
    `${page}__bookmark-button button`,
    {[`${page}__bookmark-button--active`]: isSet}
  );
  const buttonDimensions = {
    'place-card': {width: '18', height: '19'},
    'offer':  {width: '31', height: '32'},
  };
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getIsAuthorized);

  const handleFavoriteButtonClick = () => {
    if(!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(setFavoriteById({id: offerId, isFavorite: !isSet}));
    toggleStatus((prevStatus) => !prevStatus);
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
