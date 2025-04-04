import { MouseEventHandler } from "react";

export interface ButtonUIProps
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, "type" | "size">
  > {
  type?: 'default' | 'edit' | 'cross' | 'done';
  size?: 'small' | 'medium' | 'large';
  extraClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
