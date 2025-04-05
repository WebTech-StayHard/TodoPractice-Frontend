import { FC, useState } from "react";

import { Task } from "@components/task";
import { FolderTasksUI } from "@ui/folder-tasks";
import { FolderTasksProps } from "./type";
import { useSelector } from "@store";
import { useDispatch } from "@store";
import { TTask } from "@utils/types";
import {
  removeTaskAsync,
  updateTaskStatusAsync
} from "@thunks/tasksThunks";
import { getIsRemovingTask, getIsUpdatingTaskStatus } from "@slices/operationStatusSlice";
import { updateFolderTitleAsync } from "@thunks/foldersThunks";

export const FolderTasks: FC<FolderTasksProps> = ({ folder }) => {
  const dispatch = useDispatch();
  const isUpdatingTaskStatus = useSelector(getIsUpdatingTaskStatus);
  const isRemovingTask = useSelector(getIsRemovingTask);
  const [editTitle, setEditTitle] = useState(false);

  const setTaskStatus = (task: TTask, status: boolean) => {
    dispatch(updateTaskStatusAsync({ task, data: status }));
  };

  const removeTask = (taskid: string) => {
    dispatch(removeTaskAsync(taskid));
  };

  const setFolderTitle = (title: string) => {
    dispatch(updateFolderTitleAsync({ folder, data: title }));
  };

  const activeEditTitleMode = () => setEditTitle(true);
  const disableEditTitleMode = () => setEditTitle(false);

  const taskElements = folder.tasks.map((t) => (
    <Task
      key={t.id}
      task={t}
      isRemovingTask={isRemovingTask}
      isUpdatingTaskStatus={isUpdatingTaskStatus}
      handleRemove={removeTask}
      setTaskStatus={setTaskStatus}
    />
  ));

  return (
    <FolderTasksUI
      folder={folder}
      taskElements={taskElements}
      editTitle={editTitle}
      activeEditTitleMode={activeEditTitleMode}
      disableEditTitleMode={disableEditTitleMode}
      setFolderTitle={setFolderTitle}
    />
  );
};
