/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { AllTasksUI } from "../ui/all-tasks";
import { useDispatch, useSelector } from '../../services/store/store';
import { getFoldersWithTasksSelector } from '../../services/slices/foldersSlice';
import { getFoldersWithTasks } from '../../services/thunks/foldersThunks';
import { FolderTasksUI } from '../ui/folder-tasks';
import { Task } from '../task';

export const AllTasks: FC = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(getFoldersWithTasksSelector);

  useEffect(() => {
    dispatch(getFoldersWithTasks());
  }, []);

  const elements = allTasks.map((folder) => {
    const {tasks, ...folderData } = folder;
    const taskElements = tasks.map((t, index) => <Task key={index} task={t} />);
    return (
      <FolderTasksUI
        folder={folderData}
        taskElements={taskElements}
      />
    )
  });

  return (
    <AllTasksUI
      elements={elements}
    />
  );
};
