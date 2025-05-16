import { FC, useState } from "react";

import { Task } from "@components/task";
import { getIsRemovingTask, getIsUpdatingTaskStatus } from "@slices/operationStatusSlice";
import { useDispatch, useSelector } from "@store";
import { updateFolderTitleAsync } from "@thunks/foldersThunks";
import { FolderTasksUI } from "@ui/folder-tasks";
import { FolderTasksProps } from "./type";

export const FolderTasks: FC<FolderTasksProps> = ({ folder }) => {
  const dispatch = useDispatch();
  const isUpdatingTaskStatus = useSelector(getIsUpdatingTaskStatus);
  const isRemovingTask = useSelector(getIsRemovingTask);
  const [editTitle, setEditTitle] = useState(false);

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
