import { FC } from 'react';
import { TabContainerProps, TabProps } from './type';
import { TabContainerUI, TabUI } from '@ui/common/tab';

export const Tab: FC<TabProps> = ({text, children}) => {
  return (
    <TabUI 
      text={text}
      children={children}
    />
  );
};

export const TabContainer: FC<TabContainerProps> = ({children, isActive, onClick}) => {
  return (
    <TabContainerUI 
      isActive={isActive}
      children={children}
      onClick={onClick}
    />
  );
};