import { Button, IconButton } from '../Button';
import { LuArrowLeft, LuArrowRight, LuLibrary, LuPlus } from 'react-icons/lu';

import { FaBars } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SideBarList from './sideBarList';
import { useStateProvider } from '../../context/contextProvider';

const SideBar = () => {
  const { state, dispatch, accessToken } = useStateProvider();

  return (
    <div className='flex w-96 flex-col rounded-md bg-neutral-900 p-2'>
      <div className='mb-4 mt-2 flex w-full items-center justify-between'>
        <Button
          leadingIcon={<LuLibrary />}
          intent={'invisible'}
          className='pl-2 hover:text-white'
          size={'extraLarge'}
          bold
        >
          Your Library
        </Button>
        <div className=''>
          <IconButton icon={<LuPlus className='h-6 w-6' />} intent={'invisible'} className='hover:bg-white/5' />
          <IconButton icon={<LuArrowRight className='h-6 w-6' />} intent={'invisible'} className='hover:bg-white/5' />
        </div>
      </div>
      <div className='flex min-h-min flex-col'>
        <div className='space-x-1.5 overflow-x-scroll whitespace-nowrap pb-2'>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Playlist
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Podcasts & Shows
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Albums
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Artists
          </Button>
          <Button intent={'tertiary'} size={'extraSmall'}>
            Artists
          </Button>
        </div>
        <div className='flex min-h-fit items-center justify-between '>
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
