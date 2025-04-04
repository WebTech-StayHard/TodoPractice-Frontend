import { TFolder } from '@utils/types';

export type EditFolderTitleFormProps = {
  folder: TFolder;
  onUpdateComplete: () => void;
}