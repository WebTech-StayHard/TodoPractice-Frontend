import { TFolder } from '@utils/types';

export type TAppState = {
  isInitialized: boolean;
};

export type TFoldersState = {
  folders: TFolder[];
  currentFolderId: string | null;
  isLoading: boolean;
};

export type TOperationStatusState = {
  isAddingFolder: boolean;
  isRemovingFolder: string[];
  isRemovingTask: string[];

  isUpdatingTaskStatus: string[];
  isUpdatingTaskText: string[];
  isUpdatingFolderTitle: string[];
};

export type PayloadRemoveTask = {
  id: string;
  folderid: string;
}