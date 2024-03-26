import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
const getUserData = (state: State): UserData => state[NameSpace.User].userData;

export { getAuthorizationStatus, getUserData };
