import { FC } from "react";
import { AddTaskFormUIProps } from "./type";
import { Button } from "@components/common/buttons";

import s from "./add-task-form.module.css";
import clsx from "clsx";

import plusIcon from "@images/plus-white.svg";

export const AddTaskFormUI: FC<AddTaskFormUIProps> = ({
  isFormShow,
  taskText,
  onTaskTextChange,
  showForm,
  hideForm,
  handleSubmit
}) => {
  return !isFormShow ? (
    <Button extraClass={clsx(s.taskBtn, s.newTaskBtn)} onClick={showForm}>
      <img src={plusIcon} className={s.newTaskBtn__icon} alt="plusIcon" />
      <span className={s.newTaskBtn__text}>
        Новая задача
      </span>
    </Button>
  ) : (
    <form className={s.form} name="add-task" onSubmit={handleSubmit}>
      <input
        id="text-task"
        className={s.taskInput}
        placeholder="Текст задачи"
        value={taskText}
        onChange={onTaskTextChange}
        required
      />
      <div className={s.taskBtnContainer}>
        <Button extraClass={clsx(s.taskBtn, s.taskSubmitBtn)}>
          Добавить задачу
        </Button>
        <Button extraClass={clsx(s.taskBtn, s.taskCancelBtn)} onClick={hideForm}>
          Отмена
        </Button>
      </div>
    </form>
  );
};
