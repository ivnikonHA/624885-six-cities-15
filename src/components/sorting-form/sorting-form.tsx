import SortList from '../../components/sort-list/sort-list';

type SortingFormProps = {
  items: string[];
  currentItem: string;
  isOpened: boolean;
};

export default function SortingForm({ items, currentItem, isOpened }: SortingFormProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList items={items} currentItem={currentItem} opened={isOpened} />
    </form>
  );
}
