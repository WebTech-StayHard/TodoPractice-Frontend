import { createSlice } from "@reduxjs/toolkit";
import { getFoldersAsync } from "@thunks/foldersThunks";
import { TAppState } from './types/types';

const initialState: TAppState = {
  isInitialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  selectors: {
    getIsInitializedSelector: (state) => state.isInitialized,
  },
  extraReducers: (builder) => {
    builder.addCase(getFoldersAsync.fulfilled, (state) => {
      state.isInitialized = true;
    });
  },
});

export const reducer = appSlice.reducer;
export const { getIsInitializedSelector } = appSlice.selectors;
