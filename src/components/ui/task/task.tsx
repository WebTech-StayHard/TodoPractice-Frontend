import { FC } from 'react';

import s from './task.module.css'
import { TaskUIProps } from './type';

export const TaskUI: FC<TaskUIProps> = ({ text }) => {
  return (
    <article className={s.task}>
      <input type='checkbox' />
      {text}
    </article>
  );
};