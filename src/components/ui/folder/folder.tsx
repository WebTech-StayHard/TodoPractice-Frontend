import { FC } from 'react';

import { Tab, TabContainer } from '@components/common/tab';
import { FolderMark } from '@components/folder-mark';
import { Button } from '@components/common/buttons';

import s from './folder.module.css';
import crossIcon from '@images/cross.svg';
import { FolderUIProps } from './type';

export const FolderUI: FC<FolderUIProps> = ({title, color, isActive, disabled, onClick}) => {
  return (
    <TabContainer isActive={isActive}>
      <Tab text={title}>
        <FolderMark backgroundColor={color} />
      </Tab>
      <Button 
        className={s.removeButton}
        disabled={disabled}
        onClick={onClick}
      >
        <img src={crossIcon} alt='cross'/>
      </Button>
    </TabContainer>
  );
};