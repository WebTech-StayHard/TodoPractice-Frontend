/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "@store";
import { getIsLoadingSelector, setCurrentFolder } from "@slices/foldersSlice";
import { getCurrentFolderSelector } from "@selectors/foldersSelectors";
import { Loader } from "@components/common/loader";
import { FolderTasks } from "@components/folder-tasks";
import { NotFound } from '@components/not-found';

export const FolderTasksContainer: FC = () => {
  const dispatch = useDispatch();
  const { folderId } = useParams<"folderId">();

  const folder = useSelector(getCurrentFolderSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    if (folderId) {
      dispatch(setCurrentFolder(folderId));
    }

    return () => {
      dispatch(setCurrentFolder(""));
    };
  }, [folderId]);

  if (!folder) {
    return <NotFound title='Папка не найдена!' />;
  }

  return isLoading ? <Loader /> : <FolderTasks folder={folder} />;
};
