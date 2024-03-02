import { GoChevronLeft, GoChevronRight, GoBell } from 'react-icons/go';
import { MdGroups } from 'react-icons/md';
import { IconButton } from '../Button';
import { useStateProvider } from '../../utils/contextProvider';

const NavBar = () => {
  const [{ user }] = useStateProvider();
  console.log(user);

  return (
    <div className="flex justify-between">
      <div className="space-x-1.5">
        <IconButton
          icon={<GoChevronLeft className="h-6 w-6" />}
          intent={'secondary'}
          size={'extraSmall'}
          disabled
        />
        <IconButton
          icon={<GoChevronRight className="h-6 w-6" />}
          intent={'secondary'}
          size={'extraSmall'}
        />
      </div>
      <div className="space-x-1.5">
        <IconButton
          icon={<GoBell className="h-5 w-5" />}
          intent={'secondary'}
          size={'extraSmall'}
          disabled
        />
        <IconButton
          icon={<MdGroups className="h-5 w-5" />}
          intent={'secondary'}
          size={'extraSmall'}
          disabled
        />
        <IconButton
          icon={<img src={user?.images?.[0]?.url} className="h-5 w-5 rounded-full" />}
          intent={'secondary'}
          size={'extraSmall'}
          disabled
        />
      </div>
    </div>
  );
};

export default NavBar;
