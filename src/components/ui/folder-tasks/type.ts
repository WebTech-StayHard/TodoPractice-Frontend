import { ReactNode } from 'react';
import { TFolder } from '../../../utils/types';

export type FolderTasksUIProps = {
  taskElements: ReactNode[];
  folder: TFolder;
  editTitle: boolean;
  activeEditTitleMode: () => void;
  disableEditTitleMode: () => void;
  setFolderTitle: (title: string) => void;
}