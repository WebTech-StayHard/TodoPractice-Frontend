// Настройки для модального окна
export type ModalSettings = {
  position: { top: number; left: number };
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

// Тип элемента, который будет использоваться для привязки позиции окна
export type TargetElementType = HTMLElement | null;