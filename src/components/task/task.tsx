import { ChangeEvent, FC, useState } from "react";

import { TaskProps } from "./type";
import { TaskUI } from "@ui/task";
import { checkInProgress } from "@utils/helpers/arrayHelper";
import { removeTaskAsync, updateTaskStatusAsync } from "@thunks/tasksThunks";
import { useDispatch } from '@store';

export const Task: FC<TaskProps> = ({
  task,
  isRemovingTask,
  isUpdatingTaskStatus,
}) => {
  const dispatch = useDispatch();
  const { id } = task;
  const [editMode, setEditMode] = useState(false);

  const setTaskStatus = (evt: ChangeEvent<HTMLInputElement>) => {
    const status = evt.target.checked;
    dispatch(updateTaskStatusAsync({ task, data: status }));
  };

  const removeTask = () => {
    dispatch(removeTaskAsync(id));
  };

  return (
    <TaskUI
      task={task}
      editMode={editMode}
      activeEditMode={() => setEditMode(true)}
      disableEditMode={() => setEditMode(false)}
      isRemovingTask={checkInProgress(isRemovingTask, id)}
      isUpdatingTaskStatus={checkInProgress(isUpdatingTaskStatus, id)}
      removeTask={removeTask}
      setTaskStatus={setTaskStatus}
    />
  );
};
