import { getToastsSelector } from "@slices/toastsSlice";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Toast } from "@components/common/toast";
import s from "./toast-list.module.css";

export const ToastList: FC = () => {
  const toasts = useSelector(getToastsSelector);
  const toastElements = toasts.map((t) => (
    <Toast
      key={t.id}
      id={t.id}
      type={t.type}
      text={t.message}
      duration={t.duration}
    />
  ));

  return <section className={s.toastList}>{toastElements}</section>;
};
