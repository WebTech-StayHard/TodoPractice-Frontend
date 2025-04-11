import Modal from '../toast/toast';
import s from './ModalError.module.css';

const ModalError = ({title = 'Произошла ошибка!', text = 'Текст ошибки', isOpen = false, delay}) => {
  return (
    <Modal isOpen={isOpen} delay={delay}>
      <div className={s.modalError}>
        <h2 className={s.title}>
          {title}
        </h2>
        <p className={s.text}>
          {text}
        </p>
      </div>
    </Modal>
  );
};

export default ModalError;