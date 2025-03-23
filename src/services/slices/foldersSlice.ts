import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFolder, TTask } from "../../utils/types";
import { getFoldersAsync } from "../thunks/foldersThunks";

type TFoldersState = {
  folders: TFolder[];
  currentFolderId: string | null;
  isLoading: boolean;
};

const initialState: TFoldersState = {
  folders: [],
  currentFolderId: null,
  isLoading: false,
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setCurrentFolder: (state, { payload }: PayloadAction<string>) => {
      state.currentFolderId = payload;
    },
    addFolder: (state, { payload }: PayloadAction<TFolder>) => {
      state.folders = [...state.folders, payload];
    },
    removeFolder: (state, { payload }: PayloadAction<string>) => {
      state.folders = state.folders.filter((f) => f.id !== payload);
    },
    addTask: (state, { payload }: PayloadAction<TTask>) => {
      const folder = state.folders.find((f) => f.id === payload.folderid);
      folder?.tasks.push(payload);
    },
    setTaskStatus: (state, { payload }: PayloadAction<TTask>) => {
      const task = findTask(state, payload.folderid, payload.id);

      if (task) {
        task.status = payload.status;
      }
    },
    setTaskText: (state, { payload }: PayloadAction<TTask>) => {
      const task = findTask(state, payload.folderid, payload.id);

      if (task) {
        task.text = payload.text;
      }
    },
    setFolderTitle: (state, { payload }: PayloadAction<TFolder>) => {
      const folder = state.folders.find((f) => f.id === payload.id);

      if (folder) {
        folder.title = payload.title
      }
    }
  },
  selectors: {
    getFoldersSelector: (state) => state.folders,
    getCurrentFolderIdSelector: (state) => state.currentFolderId,
    getIsLoadingSelector: (state) => state.isLoading,
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
      });
  },
});

const findTask = (state: TFoldersState, taskId: string, folderId: string) => {
  const folder = state.folders.find((f) => f.id === folderId);
  return folder?.tasks.find((t) => t.id === taskId);
};

export const reducer = foldersSlice.reducer;
export const {
  setCurrentFolder,
  addFolder,
  removeFolder,
  addTask,
  setTaskStatus,
  setTaskText,
  setFolderTitle
} = foldersSlice.actions;
export const {
  getFoldersSelector,
  getIsLoadingSelector,
  getCurrentFolderIdSelector,
} = foldersSlice.selectors;
