import { CommentType } from '../types/comments';

const COMMENTS: CommentType[] = [
  {
    id: '1725dd1d-0880-4529-bc2a-7f4239ed9e58',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: new Date('2024-02-19T21:00:00.443Z'),
    rating: 5,
    user: {
      name: 'Isaac',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false
    }
  },
  {
    id: '9776884a-99c7-4e37-9e16-59f4665a2418',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: new Date('2024-02-20T21:00:00.443Z'),
    rating: 1,
    user: {
      name: 'Corey',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    }
  }
];

export {COMMENTS};
