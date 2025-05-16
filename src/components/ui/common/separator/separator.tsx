import { FC } from "react";
import s from "./separator.module.css";
import clsx from "clsx";
import { SeparatorUIProps } from './type';

export const SeparatorUI: FC<SeparatorUIProps> = ({ className = '' }) => {
  return <div className={clsx(s.separator, className)}></div>;
};
