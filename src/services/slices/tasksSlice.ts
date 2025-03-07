import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "../../utils/types";
import { getTasks } from "../thunks/tasksThunks";

type TFoldersState = {
  tasks: TTask[];
  isLoading: boolean;
};

const initialState: TFoldersState = {
  tasks: [],
  isLoading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
  },
  selectors: {
    getTasksSelector: (state) => state.tasks,
    getIsLoadingSelector: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTasks.fulfilled,
        (state, { payload }: PayloadAction<TTask[]>) => {
          state.isLoading = false;
          state.tasks = payload;
        }
      )
      .addCase(getTasks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { clearTasks } = tasksSlice.actions;
export const { getTasksSelector, getIsLoadingSelector } = tasksSlice.selectors;
