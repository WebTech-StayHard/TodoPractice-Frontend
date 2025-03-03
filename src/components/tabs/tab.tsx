import { FC, ReactNode } from 'react';
import s from './tab.module.css';

type TabProps = {
  text: string,
  children?: ReactNode,
}

const Tab: FC<TabProps> = ({text, children}) => {
  return (
    <div className={s.tab}>
      {children}

      <span className={s.text}>
        {text}
      </span>
    </div>
  );
}

export default Tab;