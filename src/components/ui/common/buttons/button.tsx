import { FC } from "react";
import clsx from "clsx";
import s from "./button.module.css";
import { ButtonUIProps } from "./type";

import editPenIcon from "@images/edit-pen.svg";
import crossIcon from "@images/cross.svg";
import doneIcon from "@images/done.svg";

const iconMap = {
  default: null,
  done: {
    src: doneIcon,
    alt: "Done Icon",
    buttonClassName: s.done,
  },
  edit: {
    src: editPenIcon,
    alt: "Edit Icon",
    buttonClassName: s.edit,
  },
  cross: {
    src: crossIcon,
    alt: "Cross Icon",
    buttonClassName: s.cross,
  },
};

export const ButtonUI: FC<ButtonUIProps> = ({
  variant = "default",
  size = "medium",
  children,
  className,
  extraClass,
  ...props
}) => {
  const icon = iconMap[variant];
  const baseButtonClass = icon
    ? clsx(s.btnWithIcon, s[`btnWithIcon__${size}`])
    : clsx(s.button, s[`button__${size}`]);

  const buttonClass: string =
    className || clsx(baseButtonClass, icon?.buttonClassName, extraClass);

  return (
    <button className={buttonClass} {...props}>
      {icon && (
        <img className={s[`icon__${size}`]} src={icon.src} alt={icon.alt} />
      )}
      {children}
    </button>
  );
};
