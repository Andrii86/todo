import { ActionType } from './constants';

export const addTodo = (data) => ({
  type: ActionType.ADD_TODO,
  payload: data,
});
