import { FC } from "react";
import s from "./loader.module.css";
import loader from "@images/loader.svg";
import { LoaderUIProps } from "./type";

export const LoaderUI: FC<LoaderUIProps> = ({ customLoader, className }) => (
  <div className={s.loaderContainer}>
    <img
      src={customLoader || loader}
      className={className || s.loaderDefault}
      alt="Loader"
    />
  </div>
);
