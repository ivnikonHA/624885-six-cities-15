import cn from 'classnames';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsItems from '../../components/reviews-items/reviews-items';
import Stars from '../../components/stars/stars';
import { AuthorizationStatus, Pages } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { COMMENTS } from '../../mocks/comments-mock';
import { mockNearbyArray } from '../../mocks/nearby-mock';
import { fetchOfferByIdAction } from '../../store/api-actions';
import { getCurrentOffer } from '../../store/selectors/offer-selectors';
import { getAuthorizationStatus } from '../../store/selectors/user-selectors';
import NotFoundPage from '../not-found-page/not-found-page';

export default function OfferPage(): JSX.Element {
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() =>{
    if(id) {
      dispatch(fetchOfferByIdAction(id));
    }
  }, [id, dispatch]);

  const currentOffer = useAppSelector(getCurrentOffer);
  if (!currentOffer) {
    return <NotFoundPage />;
  }
  const {
    title,
    type,
    price,
    city,
    isFavorite,
    isPremium,
    rating,
    bedrooms,
    description,
    goods,
    host,
    images,
    maxAdults
  } = currentOffer;
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities : Offer page</title>
      </Helmet>
      <Header></Header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={
                  cn('offer__bookmark-button', 'button',
                    {'offer__bookmark-button--active': isFavorite})
                } type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Stars rating={rating} page='offer' />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  )
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={
                    cn('offer__avatar-wrapper', 'user__avatar-wrapper',
                      {'offer__avatar-wrapper--pro': host.isPro})
                  }
                  >
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{COMMENTS.length}</span></h2>
                <ul className="reviews__list">
                  <ReviewsItems comments={COMMENTS} />
                </ul>
                {isAuthorized && <ReviewForm />}
              </section>
            </div>
          </div>
          <Map
            city={city}
            offers={mockNearbyArray}
            selectedOffer={currentOffer.id}
            page='offer'
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={mockNearbyArray} page={Pages.Offer} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
