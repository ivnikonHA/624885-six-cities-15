import { getIsAuthorized } from '../store/selectors/user-selectors';
import { useAppSelector } from './use-app-selector';

export const useAuth = () => useAppSelector(getIsAuthorized);
