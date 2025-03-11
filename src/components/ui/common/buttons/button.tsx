import { FC } from "react";

import s from "./button.module.css";
import { ButtonUIProps } from "./type";
import clsx from "clsx";

export const ButtonUI: FC<ButtonUIProps> = ({
  children,
  disabled,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(s.button, className)}
    >
      {children}
    </button>
  );
};
