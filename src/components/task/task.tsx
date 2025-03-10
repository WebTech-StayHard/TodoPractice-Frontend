import { FC } from "react";

import { TaskProps } from "./type";
import { TaskUI } from "../ui/task";

export const Task: FC<TaskProps> = ({ task }) => {
  const { text } = task;

  return <TaskUI text={text} />;
};
