import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFolder, TTask } from "../../utils/types";
import { addFolderAsync, getFoldersAsync } from "../thunks/foldersThunks";
import { toggleArrayItem } from '../../utils/helpers/arrayHelper';

type TFoldersState = {
  folders: TFolder[];
  currentFolderId: string | null;
  isLoading: boolean;

  isAddingFolder: boolean;
  isRemovingFolder: string[];
  isUpdatingTaskStatus: string[];
};

const initialState: TFoldersState = {
  folders: [],
  currentFolderId: null,
  isLoading: false,

  isAddingFolder: false,
  isRemovingFolder: [],
  isUpdatingTaskStatus: []
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setCurrentFolder: (state, { payload }: PayloadAction<string>) => {
      state.currentFolderId = payload;
    },
    addFolder: (state, { payload }: PayloadAction<TFolder>) => {
      state.folders.push(payload);
    },
    removeFolder: (state, { payload }: PayloadAction<string>) => {
      state.folders = state.folders.filter((f) => f.id !== payload);
    },
    setIsRemovingFolder: (state, { payload }: PayloadAction<string>) => {
      state.isRemovingFolder = toggleArrayItem(state.isRemovingFolder, payload);
    },
    addTask: (state, { payload }: PayloadAction<TTask>) => {
      const folder = state.folders.find((f) => f.id === payload.folderid);
      folder?.tasks.push(payload);
    },
    setTaskStatus: (state, { payload }: PayloadAction<TTask>) => {
      const folder = state.folders.find((f) => f.id === payload.folderid);
      const task = folder?.tasks.find((t) => t.id === payload.id);

      if (task) {
        task.status = payload.status;
      }
    },
    setIsUpdatingStatusTask: (state, { payload }: PayloadAction<string>) => {
      state.isUpdatingTaskStatus = toggleArrayItem(state.isUpdatingTaskStatus, payload);
    }
  },
  selectors: {
    getFoldersSelector: (state) => state.folders,
    getCurrentFolderIdSelector: (state) => state.currentFolderId,
    getIsLoadingSelector: (state) => state.isLoading,
    getIsAddingFolder: (state) => state.isAddingFolder,
    getIsRemovingFolder: (state) => state.isRemovingFolder,
    getIsUpdatingStatusTask: (state) => state.isUpdatingTaskStatus
  },
  extraReducers: (builder) => {
    builder
      // Getting folders
      .addCase(getFoldersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getFoldersAsync.fulfilled,
        (state, { payload }: PayloadAction<TFolder[]>) => {
          state.isLoading = false;
          state.folders = payload;
        }
      )
      .addCase(getFoldersAsync.rejected, (state) => {
        state.isLoading = false;
      })

      // Adding Folder
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

export const reducer = foldersSlice.reducer;
export const {
  setCurrentFolder,
  addFolder,
  removeFolder,
  setIsRemovingFolder,
  addTask,
  setTaskStatus,
  setIsUpdatingStatusTask,
} = foldersSlice.actions;
export const {
  getFoldersSelector,
  getIsLoadingSelector,
  getCurrentFolderIdSelector,
  getIsAddingFolder,
  getIsRemovingFolder,
  getIsUpdatingStatusTask
} = foldersSlice.selectors;
