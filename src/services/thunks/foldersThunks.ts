import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeAPI } from "../../api/fake-api";
import { addFolder, removeFolder, setIsRemovingFolder } from '../slices/foldersSlice';

export const getFoldersAsync = createAsyncThunk(
  "folders/getFolders",
  async () => await fakeAPI.getFolders()
);

export const removeFolderAsync = createAsyncThunk(
  "folders/removeFolder",
  async (id: string, { dispatch }) => {
    dispatch(setIsRemovingFolder(id));

    const deletedFolderId = await fakeAPI.removeFolder(id);
    dispatch(removeFolder(deletedFolderId));
    dispatch(setIsRemovingFolder(id));
  }
);

type AddFolderPayload = {
  folderName: string;
  folderColor: string;
};

export const addFolderAsync = createAsyncThunk<string, AddFolderPayload>(
  "folders/addFolder",
  async ({ folderName, folderColor }, { dispatch }) => {
    const folder = await fakeAPI.addFolder(folderName, folderColor);
    dispatch(addFolder(folder));
    return folder.id;
  }
);
