import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFolder } from '../../utils/types'
import { fakeAPI } from '../../api/fake-api'

type TSidebarState = {
  folders: TFolder[],
  currentFolder: string | null,
  isLoading: boolean
}

const initialState: TSidebarState = {
  folders: [],
  currentFolder: null,
  isLoading: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
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
      .addCase(getFolders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.folders = action.payload;
      })
  }
})

export const getFolders = createAsyncThunk('sidebar/getFolders', async () => {
  return fakeAPI.getFolders();
})

export const sidebarReducer = sidebarSlice.reducer;
export const { setCurrentFolder } = sidebarSlice.actions;
export const { 
  getFoldersSelector, 
  getIsLoadingSelector,
  getCurrentFolderSelector
} = sidebarSlice.selectors;