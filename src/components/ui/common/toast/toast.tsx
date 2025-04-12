import { FC } from "react";
import { Button } from "@components/common/buttons";
import { ToastUIProps } from "./type";
import s from "./toast.module.css";
import clsx from "clsx";

import errorIcon from "@images/toast/toast-error-icon.svg";
import successIcon from "@images/toast/toast-success-icon.svg";

const mapIcon = {
  default: null,
  success: successIcon,
  error: errorIcon,
};

export const ToastUI: FC<ToastUIProps> = ({ type, text, closeToast }) => {
  const icon = mapIcon[type];

  return (
    <article className={s.toast}>
      {icon && (
        <div className={s.iconContainer}>
          <img src={icon} className={s.icon} alt="Toast Icon" />
        </div>
      )}
      <div className={s.toastContent}>
        <span className={clsx(s.text, s[`text_${type}`])}>{text}</span>
        <Button className={s.closeBtn} onClick={closeToast} />
      </div>
    </article>
  );
};
