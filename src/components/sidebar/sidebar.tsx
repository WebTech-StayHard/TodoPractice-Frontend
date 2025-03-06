import { FC } from 'react';
import { SidebarUI } from '../ui/sidebar';

export const Sidebar: FC = () => {
  const handleOpenTasks = () => {};
  const handleAddFolder = () => {};

  return (
    <SidebarUI
      handleOpenTasks={handleOpenTasks}
      handleAddFolder={handleAddFolder}
    />
  );
};