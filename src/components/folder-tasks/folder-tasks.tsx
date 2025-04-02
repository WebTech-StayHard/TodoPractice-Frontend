import { FC, useState } from "react";

import { Task } from "@components/task";
import { FolderTasksUI } from "@ui/folder-tasks";
import { FolderTasksProps } from "./type";
import { useSelector } from "@store";
import { useDispatch } from "@store";
import { TTask } from "@utils/types";
import { updateTaskStatusAsync } from "@thunks/tasksThunks";
import { getIsUpdatingTaskStatus } from "@slices/operationStatusSlice";
import { updateFolderTitleAsync } from "@thunks/foldersThunks";

export const FolderTasks: FC<FolderTasksProps> = ({ folder }) => {
  const dispatch = useDispatch();
  const isUpdatingTaskStatus = useSelector(getIsUpdatingTaskStatus);
  const [editTitle, setEditTitle] = useState(false);

  const setTaskStatus = (task: TTask, status: boolean) => {
    dispatch(updateTaskStatusAsync({ task, data: status }));
  };

  const setFolderTitle = (title: string) => {
    dispatch(updateFolderTitleAsync({ folder, data: title }));
  };

  const setEditTitleMode = () => setEditTitle((p) => !p);

  const taskElements = folder.tasks.map((t) => (
    <Task
      key={t.id}
      task={t}
      isUpdatingTaskStatus={isUpdatingTaskStatus}
      setTaskStatus={setTaskStatus}
    />
  ));

  return (
    <FolderTasksUI
      folder={folder}
      taskElements={taskElements}
      editTitle={editTitle}
      setEditTitle={setEditTitleMode}
      setFolderTitle={setFolderTitle}
    />
  );
};
