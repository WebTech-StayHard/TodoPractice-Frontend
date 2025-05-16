import { FC } from 'react';
import { LoaderProps } from './type';
import { LoaderUI } from '@ui/common/loader';

export const Loader: FC<LoaderProps> = ({customLoader, className}) => {
  return (
    <LoaderUI
      className={className}
      customLoader={customLoader}
    />
  );
};