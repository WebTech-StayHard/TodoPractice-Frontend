import { TFolder } from '../../utils/types';

export type FolderProps = {
  folder: TFolder;
  isActive: boolean;
  handleRemove: (id: string) => void;
};
