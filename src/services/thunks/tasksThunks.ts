import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '@utils/types';
import { fakeAPI } from '@api';
import { addTask, removeTask, setTaskStatus, setTaskText } from '@slices/foldersSlice';
import { setIsRemovingTask, setIsUpdatingTaskStatus, setIsUpdatingTaskText } from '@slices/operationStatusSlice';
import { TUpdateTaskPayload } from './types/types';
import { addToast } from '@slices/toastsSlice';

const ADD_TASK = 'tasks/addTask';
const UPDATE_TASK_STATUS = 'tasks/updateTaskStatus';
const UPDATE_TASK_TEXT = 'tasks/updateTaskText';
const REMOVE_TASK = 'tasks/removeTask';

export const addTaskAsync = createAsyncThunk<void, Pick<TTask, 'folderid' | 'text'>>(
  ADD_TASK,
  async ({folderid, text}, { dispatch }) => {
    const task = await fakeAPI.addTask(folderid, text);
    dispatch(addTask(task));
    dispatch(addToast({
      message: 'Новая задача добавлена!',
      type: 'success',
      duration: 2000
    }));
  }
);

export const updateTaskStatusAsync = createAsyncThunk<void, TUpdateTaskPayload<boolean>>(
  UPDATE_TASK_STATUS,
  async ({task, data}, { dispatch }) => {
    dispatch(setIsUpdatingTaskStatus(task.id));

    const res = await fakeAPI.updateTaskStatus(task.id, data);
    if (res.resultCode === 0) {
      dispatch(setTaskStatus({...task, status: data}));
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
      dispatch(addToast({
        message: 'Текст задачи обновлён!',
        type: 'success',
        duration: 2000
      }));
    }

    dispatch(setIsUpdatingTaskText(task.id));
  }
);

export const removeTaskAsync = createAsyncThunk(
  REMOVE_TASK,
  async (taskid: string, { dispatch }) => {
    dispatch(setIsRemovingTask(taskid));

    const res = await fakeAPI.removeTask(taskid);
    if (res !== null) {
      dispatch(removeTask({...res}));
      dispatch(setIsRemovingTask(taskid));
      dispatch(addToast({
        message: 'Задача удалена!',
        type: 'success',
        duration: 2000
      }));
    } else {
      dispatch(addToast({
        message: 'Возникла ошибка при удалении задачи!',
        type: 'error',
        duration: 2000
      }))
    }
  }
);