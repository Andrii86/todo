import { ActionType } from './constants';

const initialState = {
  items: [
    { id: Math.random(), title: 'Learn Homework', isDone: false },
    { id: Math.random(), title: 'Drink water', isDone: true },
    { id: Math.random(), title: 'Do yoga', isDone: true },
    { id: Math.random(), title: 'Sleep', isDone: false },
    { id: Math.random(), title: 'Walk around', isDone: false },
  ],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.ADD_TODO: {
      return {
        ...state,
        items: [
          payload.data,
          ...state.items,
        ],
      };
    }

    case ActionType.UPDATE_TODO: {
      const newItems = state.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload.data,
          };
        }

        return item;
      });

      return {
        ...state,
        items: newItems,
      };
    }

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
