import { FC } from 'react';
import { TTask } from '../../../utils/types';

type TaskProps = {
  task: TTask
};

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <article>
      {task.text}
    </article>
  );
};

export default Task;