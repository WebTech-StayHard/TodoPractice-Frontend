import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '../../utils/types';
import { fakeAPI } from '../../api/fake-api';
import { addTask, setIsUpdatingStatusTask, setTaskStatus } from '../slices/foldersSlice';

export const addTaskAsync = createAsyncThunk<void, Pick<TTask, 'folderid' | 'text'>>(
  "tasks/addTask",
  async ({folderid, text}, { dispatch }) => {
    const task = await fakeAPI.addTask(folderid, text);
    dispatch(addTask(task));
  }
);

type TUpdateTaskStatusPayload = {
  task: TTask;
  status: boolean;
}

export const updateTaskStatusAsync = createAsyncThunk<void, TUpdateTaskStatusPayload>(
  "tasks/updateTaskStatus",
  async ({task, status}, { dispatch }) => {
    dispatch(setIsUpdatingStatusTask(task.id));

    const res = await fakeAPI.updateTaskStatus(task.id, status);
    if (res.resultCode === 0) {
      dispatch(setTaskStatus(task))
    }

    dispatch(setIsUpdatingStatusTask(task.id));
  }
);