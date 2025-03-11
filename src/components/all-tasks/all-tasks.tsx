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
    const { tasks, ...folderData } = folder;
    const taskElements = tasks.map((t) => <Task key={t.id} task={t} />);

    return (
      <FolderTasksUI
        key={folder.id}
        folder={folderData}
        taskElements={taskElements}
      />
    );
  });

  return isLoading ? <Loader /> : <AllTasksUI elements={elements} />;
};
