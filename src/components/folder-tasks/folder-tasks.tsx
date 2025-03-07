/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useEffect } from "react";

import { Task } from "../task";
import { FolderTasksUI } from "../ui/folder-tasks";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/store/store";
import { setCurrentFolder } from "../../services/slices/foldersSlice";
import { getTasks } from "../../services/thunks/tasksThunks";
import {
  getIsLoadingSelector,
  getTasksSelector,
} from "../../services/slices/tasksSlice";
import { getCurrentFolderSelector } from "../../services/selectors/foldersSelectors";

export const FolderTasks: FC = () => {
  const dispatch = useDispatch();
  const { folderId } = useParams<"folderId">();

  const isLoading = useSelector(getIsLoadingSelector);
  const tasks = useSelector(getTasksSelector);
  const folder = useSelector(getCurrentFolderSelector) || null;

  useEffect(() => {
    if (folderId) {
      dispatch(setCurrentFolder(folderId));
      dispatch(getTasks(folderId));
    }

    return () => {
      dispatch(setCurrentFolder(""));
    };
  }, [folderId]);

  const taskElements = tasks.map((t, index) => <Task key={index} task={t} />);

  return (
    <FolderTasksUI
      taskElements={taskElements}
      folder={folder}
      isLoading={isLoading}
    />
  );
};
