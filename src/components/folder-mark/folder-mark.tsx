import s from './folder-mark.module.css';

type FolderMarkProps = {
  color?: string
}

const FolderMark = ({color}: FolderMarkProps) => {
  const styles = {
    backgroundColor: color
  }

  return (
    <span className={s.mark} style={styles}>
    </span>
  );
}

export default FolderMark;