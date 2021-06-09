import { createStore } from 'redux';
import { combinedReducer } from './rootReducer';

export const store = createStore(combinedReducer);
