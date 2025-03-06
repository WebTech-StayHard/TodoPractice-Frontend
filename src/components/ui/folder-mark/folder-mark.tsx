import { FC } from "react";
import s from "./folder-mark.module.css";
import { FolderMarkUIProps } from "./type";

export const FolderMarkUI: FC<FolderMarkUIProps> = ({ backgroundColor }) => {
  return <span className={s.mark} style={{ backgroundColor }}></span>;
};
