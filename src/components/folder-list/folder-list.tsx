import { FC } from 'react';
import s from './folder-list.module.css';
import Tab from '../tab/tab';
import FolderMark from '../folder-mark/folder-mark';

const FolderList: FC = () => {
  const folders = [
    {
      title: 'Folder 1',
      color: '#FFFFFF'
    },
    {
      title: 'Folder 2',
      color: '#FFA454'
    },
    {
      title: 'Folder 3',
      color: '#FF5B42'
    }
  ]

  return (
    <section className={s.folderList}>
      {
        folders.map(f => 
          <Tab text={f.title} onClick={console.log} isFolder>
            <FolderMark color={f.color} />
          </Tab>
        )
      }
    </section>
  );
}

export default FolderList;