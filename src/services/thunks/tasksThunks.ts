import { createAsyncThunk } from '@reduxjs/toolkit';
import { TTask } from '../../utils/types';
import { fakeAPI } from '../../api/fake-api';

export const getTasks = createAsyncThunk<TTask[], string>(
  "tasks/getTasks",
  async (folderid) => {
    return fakeAPI.getTasks(folderid);
  }
);