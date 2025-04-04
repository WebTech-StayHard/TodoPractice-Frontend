import { FC } from 'react';
import { FolderProps } from './type';
import { FolderUI } from '@ui/folder';
import { checkInProgress } from '@utils/helpers/arrayHelper';

export const Folder: FC<FolderProps> = ({folder, isActive, isRemoving, handleRemove}) => {
  const {id, title, color} = folder;

  const removeFolder = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    evt.preventDefault();
    handleRemove(id);
  };

  return (
    <FolderUI 
      title={title}
      color={color}
      isActive={isActive}
      disabled={checkInProgress(isRemoving, id)}
      onClick={removeFolder}
    />
  );
};