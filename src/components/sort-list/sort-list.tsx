type SortListProps = {
  items: string[];
  currentItem: string;
  opened: boolean;
  onSortListClick: (item: string) => void;
}

export default function SortList({ items, currentItem, opened, onSortListClick }: SortListProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${opened && 'places__options--opened'}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`places__option ${item === currentItem && 'places__option--active'}`}
          tabIndex={0}
          onClick={() => onSortListClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
