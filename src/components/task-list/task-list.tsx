import { FC } from "react";
import s from "./task-list.module.css";
import { useSelector } from "../../store/store";
import { getTasksSelector } from "../../store/slices/tasks/tasks";
import Task from "./task/task";
import Button from '../common/buttons/button';
import clsx from 'clsx';
import Separator from '../common/separator/separator';
import { getCurrentFolderSelector } from '../../store/slices/folders/selectors';
import Title from '../common/title/title';

const TaskList: FC = () => {
  const tasks = useSelector(getTasksSelector);
  const folder = useSelector(getCurrentFolderSelector);

  const taskElements = tasks.map((t, index) => (
    <Task
      key={index}
      task={t}
    />
  ));

  return (
    !tasks.length ?
    <section className={s.noTasks}>
      <Title className={s.noTasks__title}>
        Задачи отсутствуют
      </Title>
    </section>
    :
    <section className={s.taskListContainer}>
      <Title className={s.taskListContainer__title} color={folder?.color}>
      { folder?.title }
      </Title>

      <Separator className={s.separator} />

      <div className={s.taskList}>
        { taskElements }
      </div>

      <form className={s.form} name='add-task'>
        <input
          id='text-task'
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
