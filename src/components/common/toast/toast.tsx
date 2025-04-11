/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { FC, useEffect } from "react";
import s from "./toast.module.css";
import { ToastProps } from "./type";
import { removeToast } from "@slices/toastsSlice";
import { Button } from "@components/common/buttons";

import successIcon from "@images/toast/toast-success-icon.svg";
import errorIcon from "@images/toast/toast-error-icon.svg";
import clsx from "clsx";

const mapIcon = {
  default: null,
  success: successIcon,
  error: errorIcon,
};

export const Toast: FC<ToastProps> = ({ id, type, text, duration }) => {
  const dispatch = useDispatch();
  const icon = mapIcon[type];

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
      {icon && (
        <div className={s.iconContainer}>
          <img src={icon} className={s.icon} alt="Toast Icon" />
        </div>
      )}
      <div className={s.toastContent}>
        <span className={clsx(s.text, s[`text_${type}`])}>{text}</span>
        <Button
          type="cross"
          size="small"
          extraClass={s.closeToast}
          onClick={closeToast}
        />
      </div>
    </article>
  );
};
