import { FC } from 'react';
import crossIcon from '../../../assets/images/cross.svg';
import Button from './button';

type RemoveButtonProps = {
  handleRemove?: () => void,
  className?: string
}

const RemoveButton: FC<RemoveButtonProps> = ({handleRemove, className}) => {
  return (
    <Button onClick={handleRemove} className={className}>
      <img src={crossIcon} alt='cross'/>
    </Button>
  );
};

export default RemoveButton;