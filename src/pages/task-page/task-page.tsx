import { FC } from 'react';
import s from './task-page.module.css';

const TaskPage: FC = () => {
  return (
    <section className={s.taskPage}>
      <h2 className={s.taskPage__title}>
        Задачи отсутствуют
      </h2>
    </section>
  );
};

export default TaskPage;