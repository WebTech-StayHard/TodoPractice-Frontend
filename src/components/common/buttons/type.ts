import { MouseEventHandler } from "react";

export interface ButtonProps
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, "type" | "size">
  > {
  type?: 'default' | 'edit' | 'cross' | 'done';
  size?: 'small' | 'medium' | 'large';
  extraClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
