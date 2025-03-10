import { FC, useRef } from "react";
import { SidebarUI } from "../ui/sidebar";
import useModal from '../../hooks/useModal/useModal';

export const Sidebar: FC = () => {
  const addFolderTabRef = useRef<HTMLDivElement>(null);

  // Кастомный хук для работы с модальными окнами
  const modalSettings = useModal(addFolderTabRef);

  return (
    <SidebarUI
      addFolderTabRef={addFolderTabRef}
      modalSettings={modalSettings}
    />
  );
};
