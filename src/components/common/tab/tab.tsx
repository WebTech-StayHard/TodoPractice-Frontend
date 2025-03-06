import { FC } from 'react';
import { TabContainerProps, TabProps } from './type';

export const Tab: FC<TabProps> = ({text, children}) => {
  return (
    <Tab 
      text={text}
      children={children}
    />
  );
};

export const TabContainer: FC<TabContainerProps> = ({children, isActive, onClick}) => {
  return (
    <TabContainer 
      isActive={isActive}
      children={children}
      onClick={onClick}
    />
  );
};