import { createSelector } from "@reduxjs/toolkit";
import { getFoldersSelector, getCurrentFolderIdSelector } from "./folders";

export const getCurrentFolderSelector = createSelector(
  getFoldersSelector,
  getCurrentFolderIdSelector,
  (folders, currentFolderId) => folders.find((f) => f.id === currentFolderId)
);
