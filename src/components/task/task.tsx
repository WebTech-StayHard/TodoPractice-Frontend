import { ChangeEvent, FC } from "react";

import { TaskProps } from "./type";
import { TaskUI } from "@ui/task";

export const Task: FC<TaskProps> = ({ task, isUpdatingTaskStatus, setTaskStatus }) => {
  const checkUpdatingInProgress = (id: string) => 
    isUpdatingTaskStatus.some((taskid) => taskid === id);

  const setStatus = (evt: ChangeEvent<HTMLInputElement>) => {
    setTaskStatus(task, evt.target.checked);
  };

  return (
    <TaskUI 
      task={task}
      isUpdatingTaskStatus={checkUpdatingInProgress(task.id)}
      setTaskStatus={setStatus}
    />
  );
};
