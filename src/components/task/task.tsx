import { ChangeEvent, FC } from "react";

import { TaskProps } from "./type";
import { TaskUI } from "@ui/task";
import { checkInProgress } from "@utils/helpers/arrayHelper";

export const Task: FC<TaskProps> = ({
  task,
  isRemovingTask,
  isUpdatingTaskStatus,
  handleRemove,
  setTaskStatus,
}) => {
  const { id } = task;

  const setStatus = (evt: ChangeEvent<HTMLInputElement>) => {
    setTaskStatus(task, evt.target.checked);
  };

  const setTaskText = () => {};

  const removeTask = () => {
    handleRemove(id);
  }

  return (
    <TaskUI
      task={task}
      isRemovingTask={checkInProgress(isRemovingTask, id)}
      isUpdatingTaskStatus={checkInProgress(isUpdatingTaskStatus, id)}
      removeTask={removeTask}
      setTaskStatus={setStatus}
    />
  );
};
