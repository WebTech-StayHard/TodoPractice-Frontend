import { FC } from "react";
import { Loader } from "@components/common/loader";
import s from "./app-preloader.module.css";

export const AppPreloaderUI: FC = () => (
  <section className={s.preloader}>
    <h2 className={s.preloader__title}>
      Приложение загружается...
    </h2>
    <Loader />
  </section>
);
