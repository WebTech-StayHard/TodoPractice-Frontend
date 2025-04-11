import { useDispatch } from "react-redux";
import { FC, useEffect } from "react";
import s from "./toast.module.css";
import { ToastProps } from "./type";
import { removeToast } from "@slices/toastsSlice";
import toastSuccessIcon from "@images/toast-success-icon.svg";
import { Button } from "../buttons";

export const Toast: FC<ToastProps> = ({ id, type, text, duration }) => {
  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch(removeToast(id));
  };

  useEffect(() => {
    const timerId = setTimeout(closeToast, duration);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <article className={s.toast}>
      <div>
        <img src={toastSuccessIcon} alt="Success Toast" />
      </div>
      <div className={s.toastContent}>
        <span className={s.text}>{text}</span>
        {/* <span className={s.toastClose} onClick={closeToast} /> */}
        <Button type="cross" size="small" onClick={closeToast} />
      </div>
    </article>
  );
};
