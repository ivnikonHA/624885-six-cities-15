import { NameSpace } from '../../const';
import { CommentType } from '../../types/comments';
import { State } from '../../types/state';

const getReviews = (state: State): CommentType[] | null => state[NameSpace.Reviews].reviews;

export {
  getReviews
};
