import { ReactElement } from "react";

export type ModalProps = {
  children?: ReactElement;
  position?: {
    top: number;
    left: number;
  };
  onClose?: () => void;
};