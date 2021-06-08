import { combineReducers } from "redux";
import { todoReducer } from '../todo/reducer';

export const combinedReducer = combineReducers({
  todoReducer
});
