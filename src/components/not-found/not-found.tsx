import { FC } from "react";
import { NotFoundUI } from "@ui/not-found";
import { NotFoundProps } from "./type";

export const NotFound: FC<NotFoundProps> = ({
  title = "Не найдено! Ошибка 404",
}) => <NotFoundUI title={title} />;
