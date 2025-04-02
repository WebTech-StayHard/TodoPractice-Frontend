import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleArrayItem } from "@utils/helpers/arrayHelper";
import { addFolderAsync } from "@thunks/foldersThunks";
import { TOperationStatusState } from './types/types';

const initialState: TOperationStatusState = {
  isAddingFolder: false,
  isRemovingFolder: [],

  isUpdatingTaskStatus: [],
  isUpdatingTaskText: [],
  isUpdatingFolderTitle: [],
};

const operationStatusSlice = createSlice({
  name: "operationStatus",
  initialState,
  reducers: {
    setIsRemovingFolder: (state, { payload }: PayloadAction<string>) => {
      state.isRemovingFolder = toggleArrayItem(state.isRemovingFolder, payload);
    },
    setIsUpdatingTaskStatus: (state, { payload }: PayloadAction<string>) => {
      state.isUpdatingTaskStatus = toggleArrayItem(
        state.isUpdatingTaskStatus,
        payload
      );
    },
    setIsUpdatingTaskText: (state, { payload }: PayloadAction<string>) => {
      state.isUpdatingTaskText = toggleArrayItem(
        state.isUpdatingTaskText,
        payload
      );
    },
    setIsUpdatingFolderTitle: (state, { payload }: PayloadAction<string>) => {
      state.isUpdatingFolderTitle = toggleArrayItem(
        state.isUpdatingFolderTitle,
        payload
      );
    },
  },
  selectors: {
    getIsAddingFolder: (state) => state.isAddingFolder,
    getIsRemovingFolder: (state) => state.isRemovingFolder,

    getIsUpdatingTaskStatus: (state) => state.isUpdatingTaskStatus,
    getIsUpdatingTaskText: (state) => state.isUpdatingTaskText,
    getIsUpdatingFolderTitle: (state) => state.isUpdatingFolderTitle,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFolderAsync.pending, (state) => {
        state.isAddingFolder = true;
      })
      .addCase(addFolderAsync.fulfilled, (state) => {
        state.isAddingFolder = false;
      })
      .addCase(addFolderAsync.rejected, (state) => {
        state.isAddingFolder = false;
      });
  },
});

export const reducer = operationStatusSlice.reducer;
export const {
  setIsRemovingFolder,
  setIsUpdatingTaskStatus,
  setIsUpdatingTaskText,
  setIsUpdatingFolderTitle,
} = operationStatusSlice.actions;
export const {
  getIsAddingFolder,
  getIsRemovingFolder,
  getIsUpdatingTaskStatus,
  getIsUpdatingTaskText,
  getIsUpdatingFolderTitle,
} = operationStatusSlice.selectors;
