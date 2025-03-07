import { MouseEventHandler } from 'react';

export type FolderUIProps = {
  title: string;
  color: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
