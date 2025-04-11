import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TToastsState } from './types/types';
import { TToast } from '@utils/types';

const initialState: TToastsState = {
  toasts: [{
    id: '1',
    type: 'success',
    message: 'Test',
    duration: 30000
  },
  {
    id: '2',
    type: 'error',
    message: 'Test 2',
    duration: 30000
  },
  {
    id: '3',
    type: 'default',
    message: 'Test 3',
    duration: 30000
  }]
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, { payload }: PayloadAction<TToast>) => {
      state.toasts = [...state.toasts, payload];
    },
    removeToast: (state, { payload }: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((t) => t.id !== payload);
    }
  },
  selectors: {
    getToastsSelector: (state) => state.toasts,
  },
});

export const reducer = toastsSlice.reducer;
export const { getToastsSelector } = toastsSlice.selectors;
export const { addToast, removeToast } = toastsSlice.actions;
