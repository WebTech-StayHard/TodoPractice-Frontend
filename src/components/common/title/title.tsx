import { FC } from "react";
import { TitleProps } from "./type";
import { TitleUI } from '../../ui/common/title';

export const Title: FC<TitleProps> = ({ className, color, children }) => (
  <TitleUI className={className} color={color} children={children} />
);