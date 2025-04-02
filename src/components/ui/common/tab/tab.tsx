import { FC } from 'react';
import s from './tab.module.css';
import { TabUIProps, TabContainerUIProps } from './type';
import clsx from 'clsx';

export const TabUI: FC<TabUIProps> = ({text, children}) => {
  return (
    <div className={s.tab}>
      {children}

      <span className={s.text}>
        {text}
      </span>
    </div>
  );
};

export const TabContainerUI: FC<TabContainerUIProps> = ({children, onClick, isActive}) => {
  return (
    <div 
      className={clsx(s.tabContainer, {[s.active]: isActive})} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};