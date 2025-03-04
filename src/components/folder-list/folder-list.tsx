import { FC, useEffect } from 'react';
import Folder from '../folder/folder';
import Loader from '../common/loader/loader';
import s from './folder-list.module.css';
import { useDispatch, useSelector } from '../../store/store';
import { 
  getCurrentFolderSelector, 
  getFolders, 
  getFoldersSelector, 
  getIsLoadingSelector, 
  setCurrentFolder 
} from '../../store/slices/sidebar';


const FolderList: FC = () => {
  const dispatch = useDispatch();
  const folders = useSelector(getFoldersSelector);
  const currentFolder = useSelector(getCurrentFolderSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  const setFolder = (id: string) => {
    dispatch(setCurrentFolder(id));
  }

  const handleRemove = () => {}

  const folderElements = folders.map(f => 
    <Folder 
      key={f.id}
      folder={f}
      isActive={f.id === currentFolder}
      setCurrentFolder={setFolder}
      handleRemove={handleRemove}
    />
  )

  return (
    isLoading ? 
    <Loader /> :
    <section className={s.folderList}>
      { folderElements }
    </section>
  );
}

export default FolderList;