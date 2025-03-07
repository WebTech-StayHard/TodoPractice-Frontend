import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFolder, TFolderWithTasks } from "../../utils/types";
import { getFolders, getFoldersWithTasks } from "../thunks/foldersThunks";

type TFoldersState = {
  foldersWithTasks: TFolderWithTasks[];
  folders: TFolder[];
  currentFolderId: string | null;
  isLoading: boolean;
  isLoadingAllTasks: boolean;
};

const initialState: TFoldersState = {
  foldersWithTasks: [],
  folders: [],
  currentFolderId: null,
  isLoading: false,
  isLoadingAllTasks: false
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setCurrentFolder: (state, { payload }: PayloadAction<string>) => {
      state.currentFolderId = payload;
    },
  },
  selectors: {
    getFoldersWithTasksSelector: (state) => state.foldersWithTasks,
    getFoldersSelector: (state) => state.folders,
    getIsLoadingSelector: (state) => state.isLoading,
    getCurrentFolderIdSelector: (state) => state.currentFolderId,
    getIsLoadingAllTasks: (state) => state.isLoadingAllTasks,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFolders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getFolders.fulfilled,
        (state, { payload }: PayloadAction<TFolder[]>) => {
          state.isLoading = false;
          state.folders = payload;
        }
      )
      .addCase(getFolders.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getFoldersWithTasks.pending, (state) => {
        state.isLoadingAllTasks = true;
      })
      .addCase(
        getFoldersWithTasks.fulfilled,
        (state, { payload }: PayloadAction<TFolderWithTasks[]>) => {
          state.isLoadingAllTasks = false;
          state.foldersWithTasks = payload;
        }
      )
      .addCase(getFoldersWithTasks.rejected, (state) => {
        state.isLoadingAllTasks = false;
      });
  },
});

export const foldersReducer = foldersSlice.reducer;
export const { setCurrentFolder } = foldersSlice.actions;
export const {
  getFoldersWithTasksSelector,
  getFoldersSelector,
  getIsLoadingSelector,
  getCurrentFolderIdSelector,
  getIsLoadingAllTasks
} = foldersSlice.selectors;
