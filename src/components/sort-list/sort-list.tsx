type SortListProps = {
  items: string[];
  currentItem: string;
  opened: boolean;
  handler: (item: string) => void;
}

export default function SortList({ items, currentItem, opened, handler }: SortListProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${opened && 'places__options--opened'}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`places__option ${item === currentItem && 'places__option--active'}`}
          tabIndex={0}
          onClick={() => handler(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
