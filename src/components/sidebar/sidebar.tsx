import { FC, useEffect } from 'react';
import Tab from '../common/tabs/tab';
import FolderList from '../folder-list/folder-list';

import s from './sidebar.module.css';
import listIcon from '../../assets/images/list.svg';
import plusIcon from '../../assets/images/plus.svg';
import TabContainer from '../common/tabs/tab-container';

const Sidebar: FC = () => {
  return (
    <aside className={s.sidebar}>
      <TabContainer onClick={console.log} >
        <Tab text='Все задачи'>
          <img className='tab-icon' src={listIcon} alt="list" />
        </Tab>
      </TabContainer>

      <FolderList />

      <TabContainer onClick={console.log}>
        <Tab text='Добавить папку'>
          <img className='tab-icon' src={plusIcon} alt="plus" />
        </Tab>
      </TabContainer>
    </aside>
  );
}

export default Sidebar;