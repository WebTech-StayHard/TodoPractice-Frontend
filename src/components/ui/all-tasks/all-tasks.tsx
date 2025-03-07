import { FC, ReactNode } from 'react';

type AllTaskUIProps = {
  elements: ReactNode[]
}

export const AllTasksUI: FC<AllTaskUIProps> = ({ elements }) => {
  return (
    <div>All Tasks</div>
  );
};