import { FC, ReactNode } from 'react';

import s from './button.module.css';

type ButtonProps = {
  children?: ReactNode,
  className?: string,
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick, className = ''}) => {
  return (
    <button onClick={onClick} className={`${s.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;