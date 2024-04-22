import { Button } from '../Button';
import { IoLibrary } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SideBarList from './sideBarList';
import SideBarPlaylists from './sideBarPlaylists';

const SideBar = () => {
  return (
    <div className=''>
      <div className='p-2'>
        <Button
          leadingIcon={<IoLibrary className='h-6 w-6' />}
          intent={'invisible'}
          className='gap-3 rounded-sm text-lg font-semibold text-neutral-1 hover:text-white'
        >
          Your Library
        </Button>
      </div>
      <SideBarPlaylists />
    </div>
  );
};

export default SideBar;
