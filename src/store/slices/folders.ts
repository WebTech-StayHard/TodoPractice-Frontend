import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFolder } from '../../utils/types'
import { fakeAPI } from '../../api/fake-api'

type TFoldersState = {
  folders: TFolder[],
  currentFolder: string | null,
  isLoading: boolean
}

const initialState: TFoldersState = {
  folders: [],
  currentFolder: null,
  isLoading: false
}

const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setCurrentFolder: (state, action: PayloadAction<string>) => {
      state.currentFolder = action.payload;
    }
  },
  selectors: {
    getFoldersSelector: (state) => state.folders,
    getIsLoadingSelector: (state) => state.isLoading,
    getCurrentFolderSelector: (state) => state.currentFolder
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFolders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFolders.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getFolders.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.folders = payload;
      })
      .addCase(removeFolder.fulfilled, (state, {payload}) => {
        state.folders = payload;
      })
  }
})

export const getFolders = createAsyncThunk(
  'folders/getFolders', 
  async () => {
    return fakeAPI.getFolders();
  }
);

export const removeFolder = createAsyncThunk(
  'folders/removeFolder', 
  async (id: string) => {
    return fakeAPI.removeFolder(id);
  }
);

export const foldersReducer = foldersSlice.reducer;
export const { setCurrentFolder } = foldersSlice.actions;
export const { 
  getFoldersSelector, 
  getIsLoadingSelector,
  getCurrentFolderSelector
} = foldersSlice.selectors;