import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/selectors/user-selectors';

type PublicRouteProps = {
  children: JSX.Element;
};

export default function PublicRoute({children}: PublicRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return authorizationStatus !== AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Root} />
  );
}
