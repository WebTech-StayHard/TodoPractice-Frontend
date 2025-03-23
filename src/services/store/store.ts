import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as foldersReducer } from '../slices/foldersSlice';
import { reducer as appReducer } from '../slices/appSlice';
import { reducer as operationStatusReducer } from '../slices/operationStatusSlice';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  app: appReducer,
  folders: foldersReducer,
  operationStatus: operationStatusReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;