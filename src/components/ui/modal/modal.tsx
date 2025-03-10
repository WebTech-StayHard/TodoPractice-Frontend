import { FC } from "react";
import { ModalPropsUI } from "./type";
import s from "./modal.module.css";
import { Button } from '../../common/buttons';

export const ModalUI: FC<ModalPropsUI> = ({ children, position, onClose }) => (
  <div className={s.modal} style={{...position}}>
    <div className={s.content}>
      {children}
    </div>
    <Button 
      className={s.closeBtn}
      onClick={onClose}
    />
  </div>
);
