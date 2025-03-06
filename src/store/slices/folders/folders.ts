import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFolder } from '../../../utils/types'
import { fakeAPI } from '../../../api/fake-api'

type TFoldersState = {
  folders: TFolder[],
  currentFolderId: string | null,
  isLoading: boolean
}

const initialState: TFoldersState = {
  folders: [],
  currentFolderId: null,
  isLoading: false
}

const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setCurrentFolder: (state, { payload }: PayloadAction<string>) => {
      state.currentFolderId = payload;
    }
  },
  selectors: {
    getFoldersSelector: (state) => state.folders,
    getIsLoadingSelector: (state) => state.isLoading,
    getCurrentFolderIdSelector: (state) => state.currentFolderId
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFolders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFolders.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getFolders.fulfilled, (state, {payload}: PayloadAction<TFolder[]>) => {
        state.isLoading = false;
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
  async (id: string, {dispatch}) => {
    return await fakeAPI.removeFolder(id).then(() => {
      dispatch(getFolders());
    })
  }
);

export const foldersReducer = foldersSlice.reducer;
export const { setCurrentFolder } = foldersSlice.actions;
export const { 
  getFoldersSelector, 
  getIsLoadingSelector,
  getCurrentFolderIdSelector
} = foldersSlice.selectors;