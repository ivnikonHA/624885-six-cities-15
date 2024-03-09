type CitiesListProps = {
  items: string[];
  currentItem: string;
}

export default function CitiesList({ items, currentItem }: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {items.map((item) => (
        <li key={item} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${item === currentItem && 'tabs__item--active'}`}
            href="#"
          >
            <span>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
