import { FC, ReactNode } from 'react';
import s from './tab.module.css';

type TabContainerProps = {
  isActive?: boolean,
  children?: ReactNode,
  onClick?: () => void,
}

const TabContainer: FC<TabContainerProps> = ({children, onClick, isActive}) => {
  return (
    <div className={`${s.tabContainer} ${isActive ? s.active : ''}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default TabContainer;