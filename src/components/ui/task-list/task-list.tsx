import { FC } from "react";
import s from "./task-list.module.css";
import clsx from "clsx";
import { TaskListUIProps } from "./type";
import { Title } from '../../common/title';
import { Separator } from '../../common/separator';
import { Button } from '../../common/buttons';

export const TaskListUI: FC<TaskListUIProps> = ({ taskElements, folder }) => {
  return !taskElements.length ? (
    <section className={s.noTasks}>
      <Title className={s.noTasks__title}>
        Задачи отсутствуют
      </Title>
    </section>
  ) : (
    <section className={s.taskListContainer}>
      <Title className={s.taskListContainer__title} color={folder?.color}>
        {folder?.title}
      </Title>

      <Separator className={s.separator} />

      <div className={s.taskList}>{taskElements}</div>

      <form className={s.form} name="add-task">
        <input
          id="text-task"
          className={s.taskInput}
          placeholder="Текст задачи"
        />
        <div className={s.taskBtnContainer}>
          <Button className={clsx(s.taskBtn, s.taskSubmitBtn)}>
            Добавить задачу
          </Button>
          <Button className={clsx(s.taskBtn, s.taskCancelBtn)}>
            Отмена
          </Button>
        </div>
      </form>
    </section>
  );
};
