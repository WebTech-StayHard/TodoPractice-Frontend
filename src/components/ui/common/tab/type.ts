import { ReactNode } from 'react';

export type TabUIProps = {
  text: string;
  children?: ReactNode;
};

export type TabContainerUIProps = {
  isActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};