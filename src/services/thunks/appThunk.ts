import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFoldersAsync } from "@thunks/foldersThunks";

const APP_INITIALIZE = 'app/initialize';

export const initialize = createAsyncThunk(
  APP_INITIALIZE,
  async (_, { dispatch }) => {
    const getFoldersPromise = dispatch(getFoldersAsync());
    await Promise.all([getFoldersPromise]);
  }
);
