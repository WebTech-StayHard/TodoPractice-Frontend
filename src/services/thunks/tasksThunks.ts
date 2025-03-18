import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '../../utils/types';
import { fakeAPI } from '../../api/fake-api';
import { addTask } from '../slices/foldersSlice';

export const addTaskAsync = createAsyncThunk<void, Pick<TTask, 'folderid' | 'text'>>(
  "tasks/addTask",
  async ({folderid, text}, { dispatch }) => {
    const task = await fakeAPI.addTask(folderid, text);
    dispatch(addTask(task));
  }
);