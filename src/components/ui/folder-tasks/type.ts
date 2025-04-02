import { ReactNode } from 'react';
import { TFolder } from '../../../utils/types';

export type FolderTasksUIProps = {
  taskElements: ReactNode[];
  folder: TFolder;
  editTitle: boolean;
  setEditTitle: () => void;
  setFolderTitle: (title: string) => void;
}