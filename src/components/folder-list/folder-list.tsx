import { FC } from 'react';
import s from './folder-list.module.css';
import Tab from '../tabs/tab';
import FolderMark from '../folder-mark/folder-mark';
import TabContainer from '../tabs/tab-container';
import RemoveButton from '../buttons/remove-button';

const FolderList: FC = () => {
  const folders = [
    {
      title: 'Folder 1',
      color: '#FFFFFF',
      status: true
    },
    {
      title: 'Folder 2',
      color: '#FFA454',
      status: false
    },
    {
      title: 'Folder 3',
      color: '#FF5B42',
      status: false
    }
  ]

  const handleRemove = () => {

  }

  return (
    <section className={s.folderList}>
      {
        folders.map(f => 
          <TabContainer onClick={console.log} isActive={f.status}>
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