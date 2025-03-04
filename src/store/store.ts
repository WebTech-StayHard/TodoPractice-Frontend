import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebar';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;