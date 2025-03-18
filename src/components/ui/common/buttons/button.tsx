import { FC } from "react";

import s from "./button.module.css";
import { ButtonUIProps } from "./type";
import clsx from 'clsx';

export const ButtonUI: FC<ButtonUIProps> = ({
  children,
  disabled,
  className,
  extraClass,
  onClick,
}) => (
  <button
    className={clsx(className || s.button, extraClass)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
