import {combineReducers} from '@reduxjs/toolkit';
import authState from './slice/userSlice';

export const rootReducer = combineReducers({
  authState,
});
