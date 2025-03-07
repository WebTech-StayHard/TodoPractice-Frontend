/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { AllTasksUI } from "../ui/all-tasks";
import { useDispatch, useSelector } from "../../services/store/store";
import {
  getFoldersWithTasksSelector,
  getIsLoadingAllTasks,
} from "../../services/slices/foldersSlice";
import { getFoldersWithTasks } from "../../services/thunks/foldersThunks";
import { FolderTasksUI } from "../ui/folder-tasks";
import { Task } from "../task";
import { Loader } from "../common/loader";

export const AllTasks: FC = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(getFoldersWithTasksSelector);
  const isLoading = useSelector(getIsLoadingAllTasks);

  useEffect(() => {
    dispatch(getFoldersWithTasks());
  }, []);

  const elements = allTasks.map((folder) => {
    if (!folder.tasks.length) return null;

    const { tasks, ...folderData } = folder;
    const taskElements = tasks.map((t, index) => <Task key={index} task={t} />);

    return <FolderTasksUI folder={folderData} taskElements={taskElements} />;
  });

  return isLoading ? <Loader /> : <AllTasksUI elements={elements} />;
};
