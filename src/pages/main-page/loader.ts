import { RequestStatus } from '../../const';
import { store } from '../../store';
import { fetchOffersAction } from '../../store/api-actions';

export function loadMainPageData() {

  if (store.getState().OFFERS.status === RequestStatus.Idle) {
    store.dispatch(fetchOffersAction());
  }

  return null;
}
