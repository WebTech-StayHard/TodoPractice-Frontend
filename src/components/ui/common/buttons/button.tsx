import { FC } from 'react';

import s from './button.module.css';
import { ButtonUIProps } from './type';
import clsx from 'clsx';

export const ButtonUI: FC<ButtonUIProps> = ({children, className = '', onClick}) => {
  return (
    <button onClick={onClick} className={clsx(s.button, className)}>
      {children}
    </button>
  );
};