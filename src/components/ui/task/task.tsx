import { FC } from "react";

import s from "./task.module.css";
import { TaskUIProps } from "./type";
import { CheckBox } from "@components/forms/form-elements";
import { Button } from "@components/common/buttons";
import { EditTaskTextForm } from "@components/forms/edit-task-text-form";

export const TaskUI: FC<TaskUIProps> = ({
  task,
  editMode,
  isRemovingTask,
  isUpdatingTaskStatus,
  activeEditMode,
  disableEditMode,
  removeTask,
  setTaskStatus,
}) => (
  <article className={s.taskContainer}>
    {!editMode ? (
      <div className={s.task}>
        <CheckBox
          id={task.id}
          checked={task.status}
          disabled={isUpdatingTaskStatus}
          onChange={setTaskStatus}
        />
        <div onClick={activeEditMode}>
          <span className={s.text}>{task.text}</span>
        </div>
      </div>
    ) : (
      <EditTaskTextForm task={task} onUpdateComplete={disableEditMode} />
    )}
    <div className={s.taskActions}>
      <Button
        type="cross"
        size="small"
        disabled={isRemovingTask}
        onClick={removeTask}
      />
    </div>
  </article>
);
