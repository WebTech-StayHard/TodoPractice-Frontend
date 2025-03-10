import { MouseEventHandler, ReactNode } from 'react';

export type ButtonUIProps = {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};