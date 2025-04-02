import { FC } from "react";
import s from "./home-page.module.css";
import { SEO } from "@components/SEO";

export const HomePageUI: FC = () => (
  <>
    <SEO title='Todo List' />
    <section className={s.home}>
      <h2 className={s.home__title}>
        Добро пожаловать!
      </h2>
      <p className={s.home__text}>
        Для начала работы выберите папку
      </p>
    </section>
  </>
);
