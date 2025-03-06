/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import Folder from "./folder/folder";
import Loader from "../common/loader/loader";
import s from "./folder-list.module.css";
import { useDispatch, useSelector } from "../../store/store";
import {
  getCurrentFolderSelector,
  getFolders,
  getFoldersSelector,
  getIsLoadingSelector,
  removeFolder,
  setCurrentFolder,
} from "../../store/slices/folders";
import { NavLink } from "react-router-dom";

const FolderList: FC = () => {
  const dispatch = useDispatch();
  const folders = useSelector(getFoldersSelector);
  const currentFolder = useSelector(getCurrentFolderSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  const setFolder = (id: string) => {
    dispatch(setCurrentFolder(id));
  };

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
        isActive={f.id === currentFolder}
        setCurrentFolder={setFolder}
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
