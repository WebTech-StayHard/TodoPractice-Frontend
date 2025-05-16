import { TFolder, TTask } from '@utils/types';

export type TUpdateFolderPayload<T> = {
  folder: TFolder;
  data: T;
};

export type AddFolderPayload = {
  folderName: string;
  folderColor: string;
};

export type TUpdateTaskPayload<T> = {
  task: TTask;
  data: T;
}
