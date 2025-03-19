import { useNavigate } from "react-router-dom";
import { Button } from "../../common/buttons";
import s from "./not-found.module.css";
import { FC } from "react";
import { NotFoundUIProps } from "./type";
import { SEO } from "../../SEO";

export const NotFoundUI: FC<NotFoundUIProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="Не найдено" description="Not Found" />
      <section className={s.notFound}>
        <h2 className={s.notFound__title}>
          {title}
        </h2>
        <Button onClick={() => navigate("/")}>
          Вернуться на главную
        </Button>
      </section>
    </>
  );
};
