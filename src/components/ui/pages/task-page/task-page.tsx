import { FC } from "react";
import s from "./task-page.module.css";
import { Outlet } from "react-router-dom";
import { Title } from "../../../common/title";
import { TaskPageUIProps } from "./type";
import { SEO } from '../../../SEO';

export const TaskPageUI: FC<TaskPageUIProps> = ({ isEmpty }) => (
  <>
    <SEO title='Задачи' />
    <div className={s.taskPage}>
      {isEmpty ? (
        <section className={s.noTasks}>
          <Title className={s.noTasks__title}>Задачи отсутствуют</Title>
        </section>
      ) : (
        <Outlet />
      )}
    </div>
  </>
);
