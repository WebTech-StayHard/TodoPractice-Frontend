import { FC } from "react";
import { AddTaskFormUIProps } from "./type";
import { Button } from "../../common/buttons";

import s from "./add-task-form.module.css";
import clsx from "clsx";

import plusIcon from "../../../assets/images/plus-white.svg";

export const AddTaskFormUI: FC<AddTaskFormUIProps> = ({
  isFormShow,
  showForm,
  hideForm,
  handleSubmit
}) => {
  return !isFormShow ? (
    <Button className={clsx(s.taskBtn, s.newTaskBtn)} onClick={showForm}>
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
      />
      <div className={s.taskBtnContainer}>
        <Button className={clsx(s.taskBtn, s.taskSubmitBtn)}>
          Добавить задачу
        </Button>
        <Button className={clsx(s.taskBtn, s.taskCancelBtn)} onClick={hideForm}>
          Отмена
        </Button>
      </div>
    </form>
  );
};
