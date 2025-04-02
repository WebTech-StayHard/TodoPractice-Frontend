import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeAPI } from "@api";
import {
  addFolder,
  removeFolder,
  setFolderTitle,
} from "@slices/foldersSlice";

import {
  setIsRemovingFolder,
  setIsUpdatingFolderTitle,
} from "@slices/operationStatusSlice";
import { AddFolderPayload, TUpdateFolderPayload } from './types/types';

const GET_FOLDERS = 'folders/getFolders';
const REMOVE_FOLDER = 'folders/removeFolder';
const ADD_FOLDER = 'folders/addFolder';
const UPDATE_FOLDER_TITLE = 'folders/updateFolderTitle';

export const getFoldersAsync = createAsyncThunk(
  GET_FOLDERS,
  async () => await fakeAPI.getFolders()
);

export const removeFolderAsync = createAsyncThunk(
  REMOVE_FOLDER,
  async (id: string, { dispatch }) => {
    dispatch(setIsRemovingFolder(id));

    const deletedFolderId = await fakeAPI.removeFolder(id);
    dispatch(removeFolder(deletedFolderId));
    dispatch(setIsRemovingFolder(id));
  }
);

export const addFolderAsync = createAsyncThunk<string, AddFolderPayload>(
  ADD_FOLDER,
  async ({ folderName, folderColor }, { dispatch }) => {
    const folder = await fakeAPI.addFolder(folderName, folderColor);
    dispatch(addFolder(folder));
    return folder.id;
  }
);

export const updateFolderTitleAsync = createAsyncThunk<
  void,
  TUpdateFolderPayload<string>
>(UPDATE_FOLDER_TITLE, async ({ folder, data }, { dispatch }) => {
  dispatch(setIsUpdatingFolderTitle(folder.id));

  const res = await fakeAPI.updateFolderTitle(folder.id, data);
  if (res.resultCode === 0) {
    dispatch(setFolderTitle(folder));
  }

  dispatch(setIsUpdatingFolderTitle(folder.id));
});
