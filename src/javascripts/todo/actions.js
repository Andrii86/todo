import { ActionType } from './constants';

export const addTodo = (data) => ({
  type: ActionType.ADD_TODO,
  payload: {
    data,
  },
});

export const updateTodo = (id, data) => ({
  type: ActionType.UPDATE_TODO,
  payload: {
    id,
    data,
  },
});

export const removeTodo = (id) => ({
  type: ActionType.REMOVE_TODO,
  payload: {
    id,
  },
});

export const setInputValue = (value) => ({
  type: ActionType.SET_INPUT_VALUE,
  payload: {
    value,
  },
});
