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

  isUpdatingTaskStatus: string[];
  isUpdatingTaskText: string[];
  isUpdatingFolderTitle: string[];
};