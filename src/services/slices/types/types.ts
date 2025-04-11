import { TFolder, TToast } from '@utils/types';

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

export type TSuccessRemovedTask = {
  id: string;
  folderid: string;
}

export type TToastsState = {
  toasts: TToast[];
}