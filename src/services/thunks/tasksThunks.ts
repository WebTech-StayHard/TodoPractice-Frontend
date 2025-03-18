import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '../../utils/types';
import { fakeAPI } from '../../api/fake-api';

export const addTask = createAsyncThunk<void, Pick<TTask, 'folderid' | 'text'>>(
  "tasks/addTask",
  async ({folderid, text}) => {
    await fakeAPI.addTask(folderid, text);
  }
);