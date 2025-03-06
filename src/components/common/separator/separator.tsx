import { FC } from 'react';
import s from './separator.module.css';
import clsx from 'clsx';

type SeparatorProps = {
  className?: string
}

const Separator: FC<SeparatorProps> = ({className = ''}) => {
  return (
    <div className={clsx(s.separator, className)}>
    </div>
  )
}

export default Separator;