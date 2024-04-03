import { combineReducers } from 'redux';
import { bankScoreReducer } from '../counterReducer/bankScoreReducer';
import { usersReducer } from '../usersReducer/usersReducer';

export const rootReducer = combineReducers({
  cash: bankScoreReducer,
  users: usersReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
