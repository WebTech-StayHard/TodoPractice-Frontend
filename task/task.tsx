import { FC } from "react";

import s from "./task.module.css";
import { TaskUIProps } from "./type";
import { nanoid } from "@reduxjs/toolkit";
import { CheckBox } from "../../form-elements/checkbox";

export const TaskUI: FC<TaskUIProps> = ({ text }) => {
  const id = nanoid();

  return (
    <article className={s.task}>
      <CheckBox id={id} />
      <span>{text}</span>
    </article>
  );
};
