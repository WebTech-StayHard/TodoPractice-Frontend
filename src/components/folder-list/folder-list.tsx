/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../services/store/store";
import {
  getCurrentFolderIdSelector,
  getFoldersSelector,
  getIsLoadingSelector,
} from "../../services/slices/foldersSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { Folder } from '../folder/folder';
import { FolderListUI } from '../ui/folder-list/folder-list';
import { getFolders, removeFolder } from '../../services/thunks/foldersThunks';

export const FolderList: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const folders = useSelector(getFoldersSelector);
  const currentFolderId = useSelector(getCurrentFolderIdSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  const handleRemove = (id: string) => {
    dispatch(removeFolder({id, navigate}));
  };

  const folderElements = folders.map((f) => (
    <NavLink 
      to={`/${f.id}`} 
      className='link' 
      key={f.id}
    >
      <Folder
        folder={f}
        isActive={f.id === currentFolderId}
        handleRemove={handleRemove}
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