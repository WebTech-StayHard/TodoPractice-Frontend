import { FC } from "react";
import s from "./task-list.module.css";
import { useSelector } from "../../store/store";
import { getTasksSelector } from "../../store/slices/tasks";
import Task from "./task/task";
import Button from '../common/buttons/button';
import clsx from 'clsx';
import Separator from '../common/separator/separator';

const TaskList: FC = () => {
  const tasks = useSelector(getTasksSelector);

  const taskElements = tasks.map((t, index) => (
    <Task
      key={index}
      task={t}
    />
  ));

  return (
    !tasks.length ?
    <section className={s.noTasks}>
      <h2 className={s.noTasks__title}>
        Задачи отсутствуют
      </h2>
    </section>
    :
    <section className={s.taskListContainer}>
      <h2 className={s.taskListContainer__title}>
        Folder 1
      </h2>

      <Separator className={s.separator} />

      <div className={s.taskList}>
        { taskElements }
      </div>

      <form className={s.form}>
        <input
          className={s.taskInput}
          placeholder='Текст задачи' 
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

export default TaskList;
