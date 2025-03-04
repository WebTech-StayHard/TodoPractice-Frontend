import { FC } from 'react';
import loader from '../../../assets/images/loader.svg';
import s from './loader.module.css';

type LoaderProps = {
  customLoader?: string,
  className?: string
}

const Loader: FC<LoaderProps> = ({customLoader, className}) => {
  return (
    <div className={s.loaderContainer}>
      <img
        src={customLoader || loader}
        className={className || s.loaderDefault}
        alt='Loader'
      />
    </div>
  )
}

export default Loader;