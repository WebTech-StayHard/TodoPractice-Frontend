import { createSelector } from "@reduxjs/toolkit";
import { getFoldersSelector, getCurrentFolderIdSelector } from "../slices/foldersSlice";

export const getCurrentFolderSelector = createSelector(
  getFoldersSelector,
  getCurrentFolderIdSelector,
  (folders, currentFolderId) => folders.find((f) => f.id === currentFolderId)
);
