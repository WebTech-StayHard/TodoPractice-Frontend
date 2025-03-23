import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '../../utils/types';
import { fakeAPI } from '../../api/fake-api';
import { addTask, setTaskStatus, setTaskText } from '../slices/foldersSlice';
import { setIsUpdatingTaskStatus, setIsUpdatingTaskText } from '../slices/operationStatusSlice';

type TUpdateTaskPayload<T> = {
  task: TTask;
  data: T;
}

export const addTaskAsync = createAsyncThunk<void, Pick<TTask, 'folderid' | 'text'>>(
  "tasks/addTask",
  async ({folderid, text}, { dispatch }) => {
    const task = await fakeAPI.addTask(folderid, text);
    dispatch(addTask(task));
  }
);

export const updateTaskStatusAsync = createAsyncThunk<void, TUpdateTaskPayload<boolean>>(
  "tasks/updateTaskStatus",
  async ({task, data}, { dispatch }) => {
    dispatch(setIsUpdatingTaskStatus(task.id));

    const res = await fakeAPI.updateTaskStatus(task.id, data);
    if (res.resultCode === 0) {
      dispatch(setTaskStatus(task))
    }

    dispatch(setIsUpdatingTaskStatus(task.id));
  }
);

export const updateTaskTextAsync = createAsyncThunk<void, TUpdateTaskPayload<string>>(
  "tasks/updateTaskText",
  async ({task, data}, { dispatch }) => {
    dispatch(setIsUpdatingTaskText(task.id));

    const res = await fakeAPI.updateTaskText(task.id, data);
    if (res.resultCode === 0) {
      dispatch(setTaskText(task));
    }

    dispatch(setIsUpdatingTaskText(task.id));
  }
);