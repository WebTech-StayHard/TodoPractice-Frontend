import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFoldersAsync } from "./foldersThunks";

export const initialize = createAsyncThunk(
  "app/initialize",
  async (_, { dispatch }) => {
    const getFoldersPromise = dispatch(getFoldersAsync());
    await Promise.all([getFoldersPromise]);
  }
);
