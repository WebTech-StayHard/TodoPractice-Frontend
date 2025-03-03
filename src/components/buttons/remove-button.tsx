import { FC } from 'react';
import crossIcon from '../../assets/images/cross.svg';
import Button from './button';

type RemoveButtonProps = {
  handleRemove?: () => void
}

const RemoveButton: FC<RemoveButtonProps> = ({handleRemove}) => {
  return (
    <Button onClick={handleRemove}>
      <img src={crossIcon} alt='cross'/>
    </Button>
  );
};

export default RemoveButton;