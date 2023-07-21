import { rest } from 'msw';
import todoData from './data/todo';

export function handlers() {
  return [rest.get('https://jsonplaceholder.typicode.com/todos', getTodo)];
}

const getTodo: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoData));
};
