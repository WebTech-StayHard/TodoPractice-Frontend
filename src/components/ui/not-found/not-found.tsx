import { useNavigate } from 'react-router-dom';
import { Button } from "../../common/buttons";
import s from "./not-found.module.css";

export const NotFoundUI = () => {
  const navigate = useNavigate();

  return (
    <section className={s.notFound}>
      <h2 className={s.notFound__title}>
        Не найдено! Ошибка 404
      </h2>
      <Button onClick={() => navigate('/')}>
        Вернуться на главную
      </Button>
    </section>
  );
};
