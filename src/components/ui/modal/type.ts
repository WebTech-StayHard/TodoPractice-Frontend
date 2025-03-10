import { ReactElement } from 'react';

export type ModalPropsUI = {
  children?: ReactElement;
  position?: {
    top: string,
    left: string
  };
  onClose?: () => void;
};