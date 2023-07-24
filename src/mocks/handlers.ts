import { rest } from 'msw';
import todoData from './data/todo';
import imageData from './data/images';

export function handlers() {
  return [
    rest.get('https://jsonplaceholder.typicode.com/todos', getTodo),
    rest.get('http://api.unsplash.com/photos/random', getRandomImages),
  ];
}

const getTodo: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoData));
};

const getRandomImages: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(imageData));
};
