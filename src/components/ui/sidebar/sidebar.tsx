import { FC } from "react";

import { SidebarUIProps } from "./type";
import { Tab, TabContainer } from "@components/common/tab";
import { FolderList } from "@components/folder-list";

import s from "./sidebar.module.css";
import listIcon from "@images/list.svg";
import plusIcon from "@images/plus.svg";
import { NavLink } from "react-router-dom";
import { Modal } from "@components/modal";
import { AddFolderForm } from "@components/forms/add-folder-form";
import { BurgerMenu } from "@components/common/burger-menu";
import clsx from "clsx";

export const SidebarUI: FC<SidebarUIProps> = ({
  addFolderTabRef,
  modalSettings,
  isSidebarOpen,
  toggleSidebar,
}) => (
  <>
    <div className={s.burger}>
      <BurgerMenu isOpen={isSidebarOpen} onToggle={toggleSidebar} />
    </div>
    <aside className={clsx(s.sidebar, { [s.open]: isSidebarOpen })}>
      <NavLink to="/folders/all" className="link">
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
  </>
);
