import { RefObject } from "react";
import { ModalSettings } from '@hooks/useModal/type';

export type SidebarUIProps = {
  addFolderTabRef: RefObject<HTMLDivElement | null>;
  modalSettings: ModalSettings;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};