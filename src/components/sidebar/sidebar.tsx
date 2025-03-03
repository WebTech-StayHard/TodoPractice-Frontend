import { FC } from 'react';
import Tab from '../tab/tab';
import FolderList from '../folder-list/folder-list';

import s from './sidebar.module.css';
import listIcon from '../../assets/images/list.svg';
import plusIcon from '../../assets/images/plus.svg';

const Sidebar: FC = () => {
  return (
    <aside className={s.sidebar}>
      <Tab text='Все задачи' onClick={console.log} >
        <img className='tab-icon' src={listIcon} alt="list" />
      </Tab>

      <FolderList />

      <Tab text='Добавить папку' onClick={console.log} >
        <img className='tab-icon' src={plusIcon} alt="plus" />
      </Tab>
    </aside>
  );
}

export default Sidebar;