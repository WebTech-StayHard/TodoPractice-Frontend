import { FC } from "react";

import s from "./task.module.css";
import { TaskUIProps } from "./type";
import { CheckBox } from "@components/forms/form-elements";
import { Button } from "@components/common/buttons";

export const TaskUI: FC<TaskUIProps> = ({
  task,
  isRemovingTask,
  isUpdatingTaskStatus,
  removeTask,
  setTaskStatus,
}) => (
  <article className={s.taskContainer}>
    <div className={s.task}>
      <CheckBox
        id={task.id}
        disabled={isUpdatingTaskStatus}
        onChange={setTaskStatus}
      />
      <span className={s.text}>{task.text}</span>
    </div>
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
