/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useEffect } from "react";

import { getIsLoadingSelector, getTasks, getTasksSelector } from '../../store/slices/tasks/tasks';
import { getCurrentFolderSelector } from '../../store/slices/folders/selectors';
import { Task } from '../task';
import { FolderTasksUI } from '../ui/folder-tasks';
import { useParams } from 'react-router-dom';
import { setCurrentFolder } from '../../store/slices/folders/folders';
import { useDispatch, useSelector } from '../../store/store';

export const FolderTasks: FC = () => {
  const dispatch = useDispatch();
  const { folderId } = useParams<'folderId'>();

  const isLoading = useSelector(getIsLoadingSelector);
  const tasks = useSelector(getTasksSelector);
  const folder = useSelector(getCurrentFolderSelector) || null;

  useEffect(() => {
    if (folderId) {
      dispatch(setCurrentFolder(folderId));
      dispatch(getTasks(folderId));
    }

    return () => {
      dispatch(setCurrentFolder(''));
    }
  }, [folderId]);

  const taskElements = tasks.map((t, index) => (
    <Task key={index} task={t} />
  ));

  return (
    <FolderTasksUI
      taskElements={taskElements}
      folder={folder}
      isLoading={isLoading}
    />
  )
};