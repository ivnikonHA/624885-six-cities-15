import { NameSpace } from '../../const';
import { CommentType } from '../../types/comments';
import { State } from '../../types/state';

const getReviews = (state: State): CommentType[] => state[NameSpace.Reviews].reviews;
const getIsReviewPosting = (state: State): boolean => state[NameSpace.Reviews].isReviewPosting;

export {
  getIsReviewPosting,
  getReviews
};
