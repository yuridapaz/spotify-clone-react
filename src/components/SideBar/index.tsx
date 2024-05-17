import { Button, IconButton } from '../Button';
import { LuArrowLeft, LuArrowRight, LuLibrary, LuPlus } from 'react-icons/lu';

import { FaBars } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SideBarList from './sidebarList';
import { useStateProvider } from '../../context/contextProvider';

const SideBar = () => {
  const { state, dispatch, accessToken } = useStateProvider();

  return (
    <div className='w-80 rounded-md bg-neutral-900 p-2'>
      <div className='flex w-full justify-between border border-white'>
        <Button leadingIcon={<LuLibrary />} intent={'invisible'} className=''>
          Library
        </Button>
        <div>
          <IconButton icon={<LuPlus />} intent={'tertiary'} className='hover:bg-white/5' />
          <IconButton icon={<LuArrowRight />} intent={'tertiary'} className='hover:bg-white/5' />
        </div>
      </div>
      <div className='0 flex flex-col'>
        <div className=' overflow-x-scroll whitespace-nowrap '>
          <Button intent={'tertiary'} size={'small'}>
            Playlist
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Podcasts & Shows
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Albums
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'small'}>
            Artists
          </Button>
        </div>
        <div className='flex items-center justify-between'>
          <IconButton icon={<FaMagnifyingGlass />} intent={'invisible'} />
          <Button trailingIcon={<FaBars />} intent={'invisible'}>
            Recents
          </Button>
        </div>
      </div>
      <SideBarList />
    </div>
  );
};

export default SideBar;
