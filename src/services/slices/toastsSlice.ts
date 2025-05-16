import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TToastsState } from "./types/types";
import { TNewToastData, TToast } from "@utils/types";

const initialState: TToastsState = {
  toasts: [],
  maxCount: 5,
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: {
      reducer: (state, { payload }: PayloadAction<TToast>) => {
        state.toasts = [...state.toasts, payload];
        if (state.toasts.length > state.maxCount) {
          state.toasts = state.toasts.slice(1);
        }
      },
      prepare: (newToast: TNewToastData) => ({
        payload: {
          id: nanoid(),
          ...newToast
        },
      }),
    },
    removeToast: (state, { payload }: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((t) => t.id !== payload);
    },
  },
  selectors: {
    getToastsSelector: (state) => state.toasts,
  },
});

export const reducer = toastsSlice.reducer;
export const { getToastsSelector } = toastsSlice.selectors;
export const { addToast, removeToast } = toastsSlice.actions;
