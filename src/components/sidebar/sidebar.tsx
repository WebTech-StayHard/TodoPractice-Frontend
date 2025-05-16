import { FC, useRef, useState } from "react";
import { SidebarUI } from "@ui/sidebar";
import useModal from "@hooks/useModal/useModal";

export const Sidebar: FC = () => {
  const addFolderTabRef = useRef<HTMLDivElement>(null);
  const modalSettings = useModal(addFolderTabRef);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen((v) => !v);
  };

  return (
    <SidebarUI
      addFolderTabRef={addFolderTabRef}
      modalSettings={modalSettings}
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
    />
  );
};
