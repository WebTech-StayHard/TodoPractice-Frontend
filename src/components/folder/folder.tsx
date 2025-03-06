import { FC } from 'react';
import { FolderProps } from './type';
import { FolderUI } from '../ui/folder';

export const Folder: FC<FolderProps> = ({folder, isActive, handleRemove}) => {
  const {id, title, color} = folder;

  const removeFolder = () => {
    handleRemove(id);
  }

  return (
    <FolderUI 
      title={title}
      color={color}
      isActive={isActive}
      onClick={removeFolder}
    />
  );
};