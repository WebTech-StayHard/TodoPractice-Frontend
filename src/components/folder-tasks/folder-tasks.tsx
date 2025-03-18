import { FC } from "react";

import { Task } from "../task";
import { FolderTasksUI } from "../ui/folder-tasks";
import { FolderTasksProps } from "./type";

export const FolderTasks: FC<FolderTasksProps> = ({ folder }) => {
  const taskElements = folder.tasks.map((t, index) => <Task key={index} task={t} />);

  return <FolderTasksUI folder={folder} taskElements={taskElements} />;
};
