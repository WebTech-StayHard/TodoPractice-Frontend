import { ReactNode } from 'react';

export type TabProps = {
  text: string;
  children?: ReactNode;
};

export type TabContainerProps = {
  isActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};