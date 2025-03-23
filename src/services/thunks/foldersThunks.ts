import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeAPI } from "../../api/fake-api";
import {
  addFolder,
  removeFolder,
  setFolderTitle,
} from "../slices/foldersSlice";
import { TFolder } from "../../utils/types";
import {
  setIsRemovingFolder,
  setIsUpdatingFolderTitle,
} from "../slices/operationStatusSlice";

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

type TUpdateFolderPayload<T> = {
  folder: TFolder;
  data: T;
};

export const updateFolderTitleAsync = createAsyncThunk<
  void,
  TUpdateFolderPayload<string>
>("tasks/updateFolderTitle", async ({ folder, data }, { dispatch }) => {
  dispatch(setIsUpdatingFolderTitle(folder.id));

  const res = await fakeAPI.updateFolderTitle(folder.id, data);
  if (res.resultCode === 0) {
    dispatch(setFolderTitle(folder));
  }

  dispatch(setIsUpdatingFolderTitle(folder.id));
});
