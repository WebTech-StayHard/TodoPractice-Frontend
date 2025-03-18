import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFolder } from "../../utils/types";
import {
  addFolderAsync,
  getFoldersAsync,
} from "../thunks/foldersThunks";

type TFoldersState = {
  folders: TFolder[];
  currentFolderId: string | null;
  isLoading: boolean;

  isAddingFolder: boolean;
  isRemovingFolder: string[];
};

const initialState: TFoldersState = {
  folders: [],
  currentFolderId: null,
  isLoading: false,

  isAddingFolder: false,
  isRemovingFolder: [],
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
      if (state.isRemovingFolder.includes(payload)) {
        state.isRemovingFolder = state.isRemovingFolder.filter(
          (el) => el !== payload
        );
      } else {
        state.isRemovingFolder.push(payload);
      }
    },
  },
  selectors: {
    getFoldersSelector: (state) => state.folders,
    getCurrentFolderIdSelector: (state) => state.currentFolderId,
    getIsLoadingSelector: (state) => state.isLoading,
    getIsAddingFolder: (state) => state.isAddingFolder,
    getIsRemovingFolder: (state) => state.isRemovingFolder,
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
} = foldersSlice.actions;
export const {
  getFoldersSelector,
  getIsLoadingSelector,
  getCurrentFolderIdSelector,
  getIsAddingFolder,
  getIsRemovingFolder,
} = foldersSlice.selectors;
