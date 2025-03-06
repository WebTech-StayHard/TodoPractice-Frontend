import { FC } from "react";
import { TitleUIProps } from './type';

export const TitleUI: FC<TitleUIProps> = ({ className, color, children }) => {
  return (
    <h2 className={className} style={{ color }}>
      {children}
    </h2>
  );
};
