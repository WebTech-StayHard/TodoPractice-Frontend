import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TToastsState } from './types/types';
import { TToast } from '@utils/types';

const initialState: TToastsState = {
  toasts: [{
    id: '1',
    type: 'success',
    message: 'Заголовок папки был успешно обновлён!',
    duration: 2000
  },
  {
    id: '2',
    type: 'error',
    message: 'Произошла ошибка при обновлении заголовка папки!',
    duration: 3000
  },
  {
    id: '3',
    type: 'default',
    message: 'Какое-то бессмысленное тестовое сообщение',
    duration: 3000
  }],
  maxCount: 5
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
