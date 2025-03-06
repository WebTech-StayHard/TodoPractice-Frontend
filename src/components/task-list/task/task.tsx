import { FC } from 'react';
import { TTask } from '../../../utils/types';

import s from './task.module.css'

type TaskProps = {
  task: TTask
};

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <article className={s.task}>
      <input type='checkbox' />
      {task.text}
    </article>
  );
};

export default Task;