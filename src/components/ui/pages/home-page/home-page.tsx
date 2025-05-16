import { FC } from "react";
import s from "./home-page.module.css";
import { SEO } from "@components/SEO";

export const HomePageUI: FC = () => (
  <>
    <SEO title='Todo List' />
    <section className={s.home}>
      <h2 className={s.title}>
        Добро пожаловать!
      </h2>
      <p className={s.text}>
        Для начала работы выберите папку в меню
      </p>
    </section>
  </>
);
