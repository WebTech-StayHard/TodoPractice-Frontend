import { FC } from "react";

import { SidebarProps } from "./type";
import { Tab, TabContainer } from "../common/tab";
import { FolderList } from "../../folder-list";

import s from "./sidebar.module.css";
import listIcon from "../../../assets/images/list.svg";
import plusIcon from "../../../assets/images/plus.svg";
import { NavLink } from "react-router-dom";
import { Modal } from "../../modal";
import { AddFolderForm } from "../../add-folder-form";

export const SidebarUI: FC<SidebarProps> = ({
  addFolderTabRef,
  modalSettings,
}) => (
  <aside className={s.sidebar}>
    <NavLink to="/all" className="link">
      <TabContainer>
        <Tab text="Все задачи">
          <img className="tab-icon" src={listIcon} alt="list" />
        </Tab>
      </TabContainer>
    </NavLink>

    <FolderList />

    <div ref={addFolderTabRef}>
      <TabContainer
        onClick={
          modalSettings.isOpen
            ? modalSettings.closeModal
            : modalSettings.openModal
        }
      >
        <Tab text="Добавить папку">
          <img className="tab-icon" src={plusIcon} alt="plus" />
        </Tab>
      </TabContainer>
    </div>

    {modalSettings.isOpen && (
      <Modal
        position={modalSettings.position}
        onClose={modalSettings.closeModal}
      >
        <AddFolderForm />
      </Modal>
    )}
  </aside>
);
