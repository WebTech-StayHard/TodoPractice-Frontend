import { FC } from "react";
import s from "./task-page.module.css";
import { Outlet } from 'react-router-dom';
import { Loader } from '../../../common/loader';
import { TaskPageUIProps } from './type';

export const TaskPageUI: FC<TaskPageUIProps> = ({ isLoading }) => {
  return (
    <section className={s.taskPage}>
      {
        isLoading ? 
        <div className={s.taskPage__loader}>
          <Loader /> 
        </div>
        :
        <Outlet />
      }
    </section>
  );
};
