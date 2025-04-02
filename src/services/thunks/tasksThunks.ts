import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '@utils/types';
import { fakeAPI } from '@api';
import { addTask, setTaskStatus, setTaskText } from '@slices/foldersSlice';
import { setIsUpdatingTaskStatus, setIsUpdatingTaskText } from '@slices/operationStatusSlice';
import { TUpdateTaskPayload } from './types/types';

const ADD_TASK = 'tasks/addTask';
const UPDATE_TASK_STATUS = 'tasks/updateTaskStatus';
const UPDATE_TASK_TEXT = 'tasks/updateTaskText';

export const addTaskAsync = createAsyncThunk<void, Pick<TTask, 'folderid' | 'text'>>(
  ADD_TASK,
  async ({folderid, text}, { dispatch }) => {
    const task = await fakeAPI.addTask(folderid, text);
    dispatch(addTask(task));
  }
);

export const updateTaskStatusAsync = createAsyncThunk<void, TUpdateTaskPayload<boolean>>(
  UPDATE_TASK_STATUS,
  async ({task, data}, { dispatch }) => {
    dispatch(setIsUpdatingTaskStatus(task.id));
    console.log(data);
    const res = await fakeAPI.updateTaskStatus(task.id, data);
    if (res.resultCode === 0) {
      dispatch(setTaskStatus({...task, status: data}))
    }

    dispatch(setIsUpdatingTaskStatus(task.id));
  }
);

export const updateTaskTextAsync = createAsyncThunk<void, TUpdateTaskPayload<string>>(
  UPDATE_TASK_TEXT,
  async ({task, data}, { dispatch }) => {
    dispatch(setIsUpdatingTaskText(task.id));

    const res = await fakeAPI.updateTaskText(task.id, data);
    if (res.resultCode === 0) {
      dispatch(setTaskText({...task, text: data}));
    }

    dispatch(setIsUpdatingTaskText(task.id));
  }
);