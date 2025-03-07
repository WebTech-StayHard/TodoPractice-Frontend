import { FC } from "react";

import { SidebarProps } from "./type";
import { Tab, TabContainer } from "../common/tab";
import { FolderList } from "../../folder-list";

import s from "./sidebar.module.css";
import listIcon from "../../../assets/images/list.svg";
import plusIcon from "../../../assets/images/plus.svg";
import { NavLink } from "react-router-dom";

export const SidebarUI: FC<SidebarProps> = ({ handleAddFolder }) => {
  return (
    <aside className={s.sidebar}>
      <NavLink to="/all" className='link'>
        <TabContainer>
          <Tab text="Все задачи">
            <img className="tab-icon" src={listIcon} alt="list" />
          </Tab>
        </TabContainer>
      </NavLink>

      <FolderList />

      <TabContainer onClick={handleAddFolder}>
        <Tab text="Добавить папку">
          <img className="tab-icon" src={plusIcon} alt="plus" />
        </Tab>
      </TabContainer>
    </aside>
  );
};
