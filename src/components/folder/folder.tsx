import { FC } from 'react';
import { TFolder } from '../../utils/types';
import TabContainer from '../common/tabs/tab-container';
import Tab from '../common/tabs/tab';
import FolderMark from '../folder-mark/folder-mark';
import RemoveButton from '../common/buttons/remove-button';

import s from './folder.module.css';

type FolderProps = {
  folder: TFolder,
  isActive: boolean,
  setCurrentFolder: (id: string) => void,
  handleRemove: () => void
}

const Folder: FC<FolderProps> = ({folder, isActive, setCurrentFolder, handleRemove}) => {
  const {id, title, color} = folder;

  const handleClick = () => {
    if (isActive) return;
    setCurrentFolder(id);
  }

  return (
    <TabContainer onClick={handleClick} isActive={isActive}>
      <Tab text={title}>
        <FolderMark color={color} />
      </Tab>
      <RemoveButton 
        className={s.removeButton} 
        handleRemove={handleRemove}
      />
    </TabContainer>
  )
}

export default Folder;