import { ReactNode } from 'react';

export type ButtonUIProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};