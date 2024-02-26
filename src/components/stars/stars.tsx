type starsProps = {
  rating: number;
}

export default function Stars({rating} : starsProps) : JSX.Element {
  const starsRating = {
    width: `${Math.round(rating) * 20}%`
  };
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={starsRating}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
