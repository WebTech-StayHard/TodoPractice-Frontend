import { FC } from 'react';
import { TFolder } from '../../../utils/types';
import TabContainer from '../../common/tabs/tab-container';
import Tab from '../../common/tabs/tab';
import FolderMark from '../../folder-mark/folder-mark';

import crossIcon from '../../../assets/images/cross.svg';

import s from './folder.module.css';
import Button from '../../common/buttons/button';

type FolderProps = {
  folder: TFolder,
  isActive: boolean,
  handleRemove: (id: string) => void
}

const Folder: FC<FolderProps> = ({folder, isActive, handleRemove}) => {
  const {id, title, color} = folder;

  const removeFolder = () => {
    handleRemove(id);
  }

  return (
    <TabContainer isActive={isActive}>
      <Tab text={title}>
        <FolderMark color={color} />
      </Tab>
      <Button className={s.removeButton} onClick={removeFolder}>
        <img src={crossIcon} alt='cross'/>
      </Button>
    </TabContainer>
  )
}

export default Folder;