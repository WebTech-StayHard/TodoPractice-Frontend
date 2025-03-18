import { MouseEventHandler, ReactNode } from 'react';

export type ButtonUIProps = {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  extraClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};