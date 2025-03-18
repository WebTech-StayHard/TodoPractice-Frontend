import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  extraClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};