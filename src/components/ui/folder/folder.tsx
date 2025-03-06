import { FC } from 'react';

import { Tab, TabContainer } from '../common/tab';
import { FolderMark } from '../../folder-mark';
import { Button } from '../../common/buttons/button';

import s from './folder.module.css';
import crossIcon from '../../../assets/images/cross.svg';
import { FolderUIProps } from './type';

export const FolderUI: FC<FolderUIProps> = ({title, color, isActive, onClick}) => {
  return (
    <TabContainer isActive={isActive}>
      <Tab text={title}>
        <FolderMark backgroundColor={color} />
      </Tab>
      <Button className={s.removeButton} onClick={onClick}>
        <img src={crossIcon} alt='cross'/>
      </Button>
    </TabContainer>
  );
};