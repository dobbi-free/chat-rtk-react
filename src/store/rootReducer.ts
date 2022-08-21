import chat from './reducers/chatSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  chat,
});
