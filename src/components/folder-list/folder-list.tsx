import { Folder } from '@components/folder/folder';
import {
  getCurrentFolderIdSelector,
  getFoldersSelector,
  getIsLoadingSelector
} from "@slices/foldersSlice";
import { getIsRemovingFolder } from '@slices/operationStatusSlice';
import { useSelector } from "@store";
import { FolderListUI } from '@ui/folder-list/folder-list';
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const FolderList: FC = () => {
  const folders = useSelector(getFoldersSelector);
  const currentFolderId = useSelector(getCurrentFolderIdSelector);
  const isRemoving = useSelector(getIsRemovingFolder);
  const isLoading = useSelector(getIsLoadingSelector);

  const folderElements = folders.map((f) => (
    <NavLink 
      to={`/folders/${f.id}`} 
      className='link' 
      key={f.id}
    >
      <Folder
        folder={f}
        isActive={f.id === currentFolderId}
        isRemoving={isRemoving}
      />
    </NavLink>
  ));

  return (
    <FolderListUI
      isLoading={isLoading}
      folderElements={folderElements}
    />
  );
};