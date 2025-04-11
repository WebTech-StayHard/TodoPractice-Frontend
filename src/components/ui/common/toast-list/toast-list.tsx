import { FC } from "react";
import { ToastListUIProps } from "./type";
import s from "./toast-list.module.css";

export const ToastListUI: FC<ToastListUIProps> = ({ toastElements }) => (
  <section className={s.toastList}>{toastElements}</section>
);
