import { FC } from 'react';

import { SidebarProps } from './type';
import { Tab, TabContainer } from '../common/tab';
import { FolderList } from '../../folder-list';

import s from './sidebar.module.css';
import listIcon from '../../../assets/images/list.svg';
import plusIcon from '../../../assets/images/plus.svg';

export const SidebarUI: FC<SidebarProps> = ({ handleOpenTasks, handleAddFolder }) => {
  return (
    <aside className={s.sidebar}>
      <TabContainer onClick={handleOpenTasks} >
        <Tab text='Все задачи'>
          <img className='tab-icon' src={listIcon} alt="list" />
        </Tab>
      </TabContainer>

      <FolderList />

      <TabContainer onClick={handleAddFolder}>
        <Tab text='Добавить папку'>
          <img className='tab-icon' src={plusIcon} alt="plus" />
        </Tab>
      </TabContainer>
    </aside>
  );
};