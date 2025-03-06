import { FC } from 'react';
import s from './tab.module.css';
import { TabUIProps, TabContainerUIProps } from './type';
import clsx from 'clsx';

export const Tab: FC<TabUIProps> = ({text, children}) => {
  return (
    <div className={s.tab}>
      {children}

      <span className={s.text}>
        {text}
      </span>
    </div>
  );
};

export const TabContainer: FC<TabContainerUIProps> = ({children, onClick, isActive}) => {
  return (
    <div 
      className={clsx(s.tabContainer, {[s.active]: isActive})} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};