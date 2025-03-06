import { FC } from 'react';

import { ButtonUI } from '../../ui/common/buttons';
import { ButtonProps } from './type';

export const Button: FC<ButtonProps> = ({children, className = '', onClick}) => {
  return (
    <ButtonUI
      children={children}
      className={className}
      onClick={onClick}
    />
  )
};