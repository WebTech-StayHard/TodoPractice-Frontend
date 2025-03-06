import { FC, ReactNode } from "react";

type TitleProps = {
  className?: string;
  color?: string;
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ className, color, children }) => {
  return (
    <h2 className={className} style={{ color }}>
      {children}
    </h2>
  );
};

export default Title;
