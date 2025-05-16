import { FC } from "react";
import { SEOProps } from "./type";

export const SEO: FC<SEOProps> = ({ title, description }) => (
  <>
    <title>{title || "Todo List"}</title>
    <meta
      name="description"
      content={
        description ||
        `ТodoList — простой и удобный сервис для управления вашими делами.
        Планируйте задачи, ставьте цели и достигайте их с легкостью!`
      }
    />
  </>
);
