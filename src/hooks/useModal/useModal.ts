import { useEffect, useState, useCallback, RefObject } from 'react';
import { ModalSettings, TargetElementType } from './type';

const useModal = (targetRef: RefObject<TargetElementType>): ModalSettings => {
  // Состояние модала
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  // Функция для открытия модального окна (смещаем окно относительно элемента)
  const openModal = useCallback(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY + 15,
        left: rect.left + window.scrollX,
      });
    }
    setIsModalOpen(true);
  }, [targetRef]);

  // Функция закрытия модального окна
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Логика вычисления позиции модала при изменении размера экрана или прокрутке
  useEffect(() => {
    const handleResizeOrScroll = () => {
      if (isModalOpen && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setModalPosition({
          top: rect.bottom + window.scrollY + 15,
          left: rect.left + window.scrollX,
        });
      }
    };

    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);

    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, [isModalOpen, targetRef]);

  return {
    position: modalPosition,
    isOpen: isModalOpen,
    openModal,
    closeModal,
  };
};

export default useModal;