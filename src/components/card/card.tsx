import { generatePath, Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchOffersAction, setFavoriteById } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/selectors/user-selectors';
import { OfferType } from '../../types/offers';
import Stars from '../stars/stars';

type CardProps = {
  offer: OfferType;
  page: string;
  handler?: (offer: OfferType | null) => void;
}

export default function Card({ offer, page, handler }: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const { id, title, type, price, isFavorite, isPremium, previewImage, rating } = offer;
  const handlerCardMouseEnter = () => {
    if (handler) {
      return handler(offer);
    }
  };
  const handlerCardMouseLeave = () => {
    if (handler) {
      return handler(null);
    }
  };
  const handleFavoriteButtonClick = () => {
    if(!isAuthorized) {
      return;
    }
    dispatch(setFavoriteById({id, isFavorite: !isFavorite}));
    dispatch(fetchOffersAction());
  };
  return (
    <article
      className={`${page}__card place-card`}
      onMouseEnter={handlerCardMouseEnter}
      onMouseLeave={handlerCardMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleFavoriteButtonClick}
            className={`place-card__bookmark-button
              ${isFavorite && 'place-card__bookmark-button--active'}
              button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Stars rating={rating} page={'place-card'} />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.OfferId, { id: offer.id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
