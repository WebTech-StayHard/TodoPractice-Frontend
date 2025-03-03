import { FC, ReactNode } from 'react';
import s from './tab.module.css';

import RemoveButton from '../buttons/remove-button';

type TabProps = {
  text: string,
  children?: ReactNode,
  isFolder?: boolean,
  onClick: () => void,
  handleRemove?: () => void;
}

const Tab: FC<TabProps> = ({text, children, isFolder, onClick, handleRemove}) => {
  return (
    <div className={`${s.tab}`} onClick={onClick}>
      {children}

      <span className={s.text}>
        {text}
      </span>

      {isFolder && <RemoveButton handleRemove={handleRemove} />}
    </div>
  );
}

export default Tab;