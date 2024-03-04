import { GoChevronLeft, GoChevronRight, GoBell } from 'react-icons/go';
import { MdGroups } from 'react-icons/md';
import { IconButton } from '../Button';
import { useStateProvider } from '../../utils/contextProvider';
import SearchInput from '../SearchInput';

const NavBar = () => {
  const [{ user }] = useStateProvider();

  return (
    <div className="flex items-center justify-between ">
      <div className="flex h-10 items-center space-x-2.5">
        <div className="space-x-1.5">
          <IconButton
            icon={<GoChevronLeft className="h-5 w-5" />}
            intent={'secondary'}
            size={'extraSmall'}
          />
          <IconButton
            icon={<GoChevronRight className="h-5 w-5" />}
            intent={'secondary'}
            size={'extraSmall'}
          />
        </div>
        {/* <SearchInput size={'large'} placeholder="O que você quer ouvir ?" /> */}
      </div>
      <div className="space-x-1.5">
        <IconButton
          icon={<GoBell className="h-5 w-5" />}
          intent={'secondary'}
          size={'extraSmall'}
        />
        <IconButton
          icon={<MdGroups className="h-5 w-5" />}
          intent={'secondary'}
          size={'extraSmall'}
        />
        <IconButton
          icon={<img src={user?.images?.[0]?.url} className="h-5 w-5 rounded-full" />}
          intent={'secondary'}
          size={'extraSmall'}
        />
      </div>
    </div>
  );
};

export default NavBar;
