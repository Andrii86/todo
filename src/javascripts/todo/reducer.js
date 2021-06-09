import { ActionType } from './constants';

const initialState = {
  items: [
    { id: Math.random(), title: 'Learn Homework' },
    { id: Math.random(), title: 'Drink water' },
    { id: Math.random(), title: 'Do yoga' },
    { id: Math.random(), title: 'Sleep' },
    { id: Math.random(), title: 'Walk around' },
  ],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        items: [
          payload.data,
          ...state.items,
        ],
      };

    case ActionType.REMOVE_TODO: {
      const newItems = state.items.filter((item) => item.id !== payload.id);

      return {
        ...state,
        items: newItems,
      };
    }

    default:
      return state;
  }
};
