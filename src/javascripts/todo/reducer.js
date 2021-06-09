import { ActionType } from './constants';

const initialState = {
  items: [
    { title: 'Learn Homework' },
    { title: 'Drink water' },
    { title: 'Do yoga' },
    { title: 'Sleep' },
    { title: 'Walk around' },
  ],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        items: [
          payload,
          ...state.items,
        ],
      };
    default:
      return state;
  }
};
