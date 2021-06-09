import { ActionType } from './constants';

export const addTodo = (data) => ({
  type: ActionType.ADD_TODO,
  payload: {
    data,
  },
});

export const removeTodo = (id) => ({
  type: ActionType.REMOVE_TODO,
  payload: {
    id,
  },
});
