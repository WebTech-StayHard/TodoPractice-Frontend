import { FC, useEffect } from 'react';
import Tab from '../common/tabs/tab';
import FolderList from '../folder-list/folder-list';

import s from './sidebar.module.css';
import listIcon from '../../assets/images/list.svg';
import plusIcon from '../../assets/images/plus.svg';
import TabContainer from '../common/tabs/tab-container';
import { useDispatch } from '../../store/store';
import { getFolders, getFoldersSelector, getIsLoadingSelector } from '../../store/slices/sidebar';
import { useSelector } from 'react-redux';
import Loader from '../common/loader/loader';

const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const folders = useSelector(getFoldersSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  return (
    <aside className={s.sidebar}>
      <TabContainer onClick={console.log} >
        <Tab text='Все задачи'>
          <img className='tab-icon' src={listIcon} alt="list" />
        </Tab>
      </TabContainer>

      {
        isLoading ?
        <Loader /> :
        <FolderList 
          folders={folders}
        />
      }

      <TabContainer onClick={console.log}>
        <Tab text='Добавить папку'>
          <img className='tab-icon' src={plusIcon} alt="plus" />
        </Tab>
      </TabContainer>
    </aside>
  );
}

export default Sidebar;