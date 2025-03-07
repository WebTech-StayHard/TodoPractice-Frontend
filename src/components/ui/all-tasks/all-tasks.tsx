import { FC } from 'react';
import s from './all-tasks.module.css';
import { AllTaskUIProps } from './type';

export const AllTasksUI: FC<AllTaskUIProps> = ({ elements }) => {
  return (
    <section className={s.allTasks}>
      { elements }
    </section>
  );
};