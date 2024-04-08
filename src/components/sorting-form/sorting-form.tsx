import { useState } from 'react';

import SortList from '../../components/sort-list/sort-list';
import { SortOptions } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeSortType } from '../../store/offers/offers-slice';

export default function SortingForm() {
  const [isOpened, setIsOpened] = useState(false);
  const [currentItem, setCurrentItem] = useState(SortOptions.POPULAR);
  const dispatch = useAppDispatch();
  const handleSortListClick = (item: string) => {
    setCurrentItem(item);
    dispatch(changeSortType({ sortType: item }));
    setIsOpened(false);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpened(!isOpened)}>
        {currentItem}
        <svg className="places__sorting-arrow" width="7" height="4" >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList items={Object.values(SortOptions)} currentItem={currentItem} opened={isOpened} onSortListClick={handleSortListClick} />
    </form>
  );
}
