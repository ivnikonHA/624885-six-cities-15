import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import LoadingPage from '../../pages/loading-page/loading-page';
import { getAuthorizationStatus } from '../../store/selectors/user-selectors';

type PublicRouteProps = {
  children: JSX.Element;
};

export default function PublicRoute({children}: PublicRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingPage />;
  }
  return authorizationStatus === AuthorizationStatus.NoAuth ? (
    children
  ) : (
    <Navigate to={AppRoute.Root} />
  );
}
