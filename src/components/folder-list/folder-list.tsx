import { FC } from "react";
import { useDispatch, useSelector } from "../../services/store/store";
import {
  getCurrentFolderIdSelector,
  getFoldersSelector,
  getIsLoadingSelector,
  getIsRemovingFolder
} from "../../services/slices/foldersSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { Folder } from '../folder/folder';
import { FolderListUI } from '../ui/folder-list/folder-list';
import { removeFolderAsync } from '../../services/thunks/foldersThunks';

export const FolderList: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const folders = useSelector(getFoldersSelector);
  const currentFolderId = useSelector(getCurrentFolderIdSelector);
  const isRemoving = useSelector(getIsRemovingFolder);
  const isLoading = useSelector(getIsLoadingSelector);

  const handleRemove = async (id: string) => {
    try {
      await dispatch(removeFolderAsync(id));
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

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