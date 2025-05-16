import { FC } from "react";
import { TitleUIProps } from "./type";
import clsx from "clsx";
import s from "./title.module.css";

export const TitleUI: FC<TitleUIProps> = ({ className, color, children }) => (
  <h2 className={clsx(className, s.title)} style={{ color }}>
    {children}
  </h2>
);
