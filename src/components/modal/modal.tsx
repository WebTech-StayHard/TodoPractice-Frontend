import { FC } from "react";
import { ModalUI } from "@ui/modal";
import { ModalProps } from "./type";

export const Modal: FC<ModalProps> = ({ children, position, onClose }) => {
  const stylePosition = {
    top: position?.top + 'px',
    left: position?.left + 'px'
  }

  return (
    <ModalUI 
      children={children} 
      position={stylePosition} 
      onClose={onClose} 
    />
  );
};
