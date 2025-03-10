import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeAPI } from "../../api/fake-api";
import { clearTasks } from "../slices/tasksSlice";
import { TFolderWithTasks } from "../../utils/types";

export const getFolders = createAsyncThunk(
  "folders/getFolders",
  async () => await fakeAPI.getFolders()
);

export const getFoldersWithTasks = createAsyncThunk<TFolderWithTasks[], void>(
  "folders/getFoldersWithTasks",
  async () => await fakeAPI.getFoldersWithTasks()
);

type RemoveFolderPayload = {
  id: string;
  navigate: (path: string) => void;
};

export const removeFolder = createAsyncThunk<void, RemoveFolderPayload>(
  "folders/removeFolder",
  async ({ id, navigate }, { dispatch }) => {
    return await fakeAPI.removeFolder(id).then(() => {
      dispatch(getFolders());
      dispatch(clearTasks());
      navigate("/");
    });
  }
);

type AddFolderPayload = {
  folderName: string;
  folderColor: string;
  navigate: (path: string) => void;
};

export const addFolder = createAsyncThunk<void, AddFolderPayload>(
  "folders/addFolder",
  async ({ folderName, folderColor, navigate }, { dispatch }) => {
    return await fakeAPI.addFolder(folderName, folderColor).then((id) => {
      dispatch(getFolders());
      navigate('/' + id);
    });
  }
);
