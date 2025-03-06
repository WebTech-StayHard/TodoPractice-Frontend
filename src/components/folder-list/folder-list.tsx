/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import Folder from "./folder/folder";
import Loader from "../common/loader/loader";
import s from "./folder-list.module.css";
import { useDispatch, useSelector } from "../../store/store";
import {
  getCurrentFolderIdSelector,
  getFolders,
  getFoldersSelector,
  getIsLoadingSelector,
  removeFolder,
} from "../../store/slices/folders/folders";
import { NavLink } from "react-router-dom";

const FolderList: FC = () => {
  const dispatch = useDispatch();
  const folders = useSelector(getFoldersSelector);
  const currentFolderId = useSelector(getCurrentFolderIdSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  const handleRemove = (id: string) => {
    dispatch(removeFolder(id));
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

  return isLoading ? (
    <Loader />
  ) : (
    <section className={s.folderList}>{folderElements}</section>
  );
};

export default FolderList;
