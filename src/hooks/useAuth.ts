import { getIsAuthorized } from '../store/selectors/user-selectors';
import { useAppSelector } from './useAppSelector';

export const useAuth = () => useAppSelector(getIsAuthorized);
