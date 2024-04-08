import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { OfferType } from '../../types/offers';
import FavoriteButton from '../favorite-button/favorite-button';
import Stars from '../stars/stars';

type CardProps = {
  offer: OfferType;
  page: string;
  onCardHover?: (offer: OfferType | null) => void;
}

export default function Card({ offer, page, onCardHover }: CardProps): JSX.Element {
  const { id, title, type, price, isFavorite, isPremium, previewImage, rating } = offer;
  const handleMouseEnter = () => {
    if (onCardHover) {
      return onCardHover(offer);
    }
  };
  const handleMouseLeave = () => {
    if (onCardHover) {
      return onCardHover(null);
    }
  };

  return (
    <article
      className={`${page}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <FavoriteButton offerId={id} isFavorite={isFavorite} page='place-card' />
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
