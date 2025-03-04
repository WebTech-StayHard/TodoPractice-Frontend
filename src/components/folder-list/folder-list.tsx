import { FC, useEffect } from 'react';
import s from './folder-list.module.css';
import Tab from '../common/tabs/tab';
import FolderMark from '../folder-mark/folder-mark';
import TabContainer from '../common/tabs/tab-container';
import RemoveButton from '../common/buttons/remove-button';
import { TFolder } from '../../utils/types';

type FolderListProps = {
  folders: TFolder[]
}

const FolderList: FC<FolderListProps> = ({folders}) => {
  const handleRemove = () => {

  }

  return (
    <section className={s.folderList}>
      {
        folders.map(f => 
          <TabContainer onClick={console.log} isActive={false}>
            <Tab text={f.title}>
              <FolderMark color={f.color} />
            </Tab>
            <RemoveButton className={s.removeButton} handleRemove={handleRemove} />
          </TabContainer>
        )
      }
    </section>
  );
}

export default FolderList;