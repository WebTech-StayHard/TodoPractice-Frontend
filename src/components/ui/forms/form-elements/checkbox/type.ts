import { ChangeEvent } from 'react';

export type CheckBoxUIProps = {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}