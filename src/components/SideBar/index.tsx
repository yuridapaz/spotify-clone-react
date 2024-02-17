import SideBarList from './sideBarList';
import SideBarPlaylists from './sideBarPlaylists';

const SideBar = () => {
  return (
    <div className="w-80 bg-secondary-1 p-4">
      <SideBarList />
      <SideBarPlaylists />
    </div>
  );
};

export default SideBar;
