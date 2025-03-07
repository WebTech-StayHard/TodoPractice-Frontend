import { FC } from "react";
import s from "./task-page.module.css";
import { Outlet } from "react-router-dom";

export const TaskPageUI: FC = () => (
  <div className={s.taskPage}>
    <Outlet />
  </div>
);
