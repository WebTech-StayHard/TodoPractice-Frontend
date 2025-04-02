import { FC } from "react";

import s from "./task.module.css";
import { TaskUIProps } from "./type";
import { CheckBox } from "@components/forms/form-elements";

export const TaskUI: FC<TaskUIProps> = ({
  task,
  isUpdatingTaskStatus,
  setTaskStatus,
}) => (
  <article className={s.task}>
    <CheckBox 
      id={task.id}
      disabled={isUpdatingTaskStatus}
      onChange={setTaskStatus}
    />
    <span>
      {task.text}
    </span>
  </article>
);
