import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizesReducer } from './sources/quizes';

const rootReducer = combineReducers({
  quizesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
