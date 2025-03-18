import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFolder } from "../../utils/types";
import { getFoldersAsync } from "../thunks/foldersThunks";
import { initialize } from "../thunks/appThunk";

type TAppState = {
  isInitialized: boolean;
};

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
