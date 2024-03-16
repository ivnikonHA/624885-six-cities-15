type StarsProps = {
  rating: number;
  page: string;
}

export default function Stars({ rating, page }: StarsProps): JSX.Element {
  const starsRating = {
    width: `${Math.round(rating) * 20}%`
  };
  return (
    <div className={`${page}__rating rating`}>
      <div className={`${page}__stars rating__stars`}>
        <span style={starsRating}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
