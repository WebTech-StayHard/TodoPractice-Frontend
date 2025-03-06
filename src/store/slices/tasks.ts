import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TTask } from '../../utils/types'
import { fakeAPI } from '../../api/fake-api'

type TFoldersState = {
  tasks: TTask[],
  isLoading: boolean
}

const initialState: TFoldersState = {
  tasks: [],
  isLoading: false
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  selectors: {
    getTasksSelector: (state) => state.tasks,
    getIsLoadingSelector: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getTasks.fulfilled, (state, {payload}: PayloadAction<TTask[]>) => {
        state.isLoading = false;
        state.tasks = payload;
      })
  }
})

export const getTasks = createAsyncThunk(
  'tasks/getTasks', 
  async (folderid: string) => {
    return fakeAPI.getTasks(folderid);
  }
);


export const tasksReducer = tasksSlice.reducer;
export const { 
  getTasksSelector, 
  getIsLoadingSelector,
} = tasksSlice.selectors;