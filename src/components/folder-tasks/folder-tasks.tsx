import { FC } from "react";

import { Task } from "../task";
import { FolderTasksUI } from "../ui/folder-tasks";
import { FolderTasksProps } from "./type";
import { useSelector } from '../../services/store/store';
import { getIsUpdatingStatusTask } from '../../services/slices/foldersSlice';
import { useDispatch } from "../../services/store/store";
import { TTask } from '../../utils/types';
import { updateTaskStatusAsync } from '../../services/thunks/tasksThunks';

export const FolderTasks: FC<FolderTasksProps> = ({ folder }) => {
  const dispatch = useDispatch();
  const isUpdatingTaskStatus = useSelector(getIsUpdatingStatusTask);

  const setTaskStatus = (task: TTask, status: boolean) => {
    dispatch(updateTaskStatusAsync({ task, status }));
  };

  const taskElements = folder.tasks.map((t) => 
    <Task 
      key={t.id} 
      task={t}
      isUpdatingTaskStatus={isUpdatingTaskStatus}
      setTaskStatus={setTaskStatus}
    />
  );

  return <FolderTasksUI folder={folder} taskElements={taskElements} />;
};
