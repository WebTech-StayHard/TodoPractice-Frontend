import { FC } from 'react';
import { SidebarUI } from '../ui/sidebar';

export const Sidebar: FC = () => {
  const handleAddFolder = () => {};

  return (
    <SidebarUI
      handleAddFolder={handleAddFolder}
    />
  );
};