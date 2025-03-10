import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};