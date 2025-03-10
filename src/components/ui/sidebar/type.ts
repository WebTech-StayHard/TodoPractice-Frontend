import { RefObject } from "react";
import { ModalSettings } from '../../../hooks/useModal/type';

export type SidebarProps = {
  addFolderTabRef: RefObject<HTMLDivElement | null>;
  modalSettings: ModalSettings;
};