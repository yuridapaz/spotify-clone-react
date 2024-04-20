import SideBarList from './sideBarList';
import SideBarPlaylists from './sideBarPlaylists';

const SideBar = () => {
  return (
    <div className='h-full w-80 overflow-auto rounded-lg bg-neutral-900 p-4'>
      <SideBarList />
      <SideBarPlaylists />
    </div>
  );
};

export default SideBar;
