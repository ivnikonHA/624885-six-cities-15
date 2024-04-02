type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type CommentType = {
  id: string;
  comment: string;
  date: Date;
  rating: number;
  user: UserType;
}
type ReviewType = {
  id: string;
  comment: string;
  rating: number;
}

export type {CommentType, ReviewType};
