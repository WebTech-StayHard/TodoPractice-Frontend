import { MouseEventHandler } from 'react';

export type FolderUIProps = {
  title: string;
  color: string;
  isActive: boolean;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
