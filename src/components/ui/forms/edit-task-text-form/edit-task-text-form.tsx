import { Button } from "@components/common/buttons";
import { EditTaskTextFormUIProps } from "./type";
import { FC } from "react";
import s from "./edit-task-text-form.module.css";

export const EditTaskTextFormUI: FC<EditTaskTextFormUIProps> = ({
  taskText,
  isUpdate,
  isError,
  onTaskTextChange,
  stopEdit,
  handleSubmit,
}) => (
  <form className={s.form} name="edit-task-text" onSubmit={handleSubmit}>
    <input
      id="task-text"
      className={s.input}
      placeholder="Новое описание задачи"
      value={taskText}
      onChange={onTaskTextChange}
      maxLength={128}
      required
    />
    <Button type="done" disabled={isUpdate || isError} />
    <Button type='cross' onClick={stopEdit} />
  </form>
);
