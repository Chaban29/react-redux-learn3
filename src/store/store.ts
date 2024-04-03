import { createStore } from 'redux';
import { rootReducer } from './Reducers/rootReducers/rootReducers';

export const store = createStore(rootReducer);
