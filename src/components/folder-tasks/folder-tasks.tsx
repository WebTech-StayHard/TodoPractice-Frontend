import { FC } from "react";

import { Task } from "../task";
import { FolderTasksUI } from "../ui/folder-tasks";
import { FolderTasksProps } from "./type";
import { useSelector } from '../../services/store/store';
import { useDispatch } from "../../services/store/store";
import { TTask } from '../../utils/types';
import { updateTaskStatusAsync } from '../../services/thunks/tasksThunks';
import { getIsUpdatingTaskStatus } from '../../services/slices/operationStatusSlice';

export const FolderTasks: FC<FolderTasksProps> = ({ folder }) => {
  const dispatch = useDispatch();
  const isUpdatingTaskStatus = useSelector(getIsUpdatingTaskStatus);

  const setTaskStatus = (task: TTask, status: boolean) => {
    dispatch(updateTaskStatusAsync({ task, data: status }));
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
