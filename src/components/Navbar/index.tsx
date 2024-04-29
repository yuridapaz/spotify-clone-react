import { GoBell, GoChevronLeft, GoChevronRight, GoHome } from 'react-icons/go';

import { IconButton } from '../Button';
import { MdGroups } from 'react-icons/md';
import SearchInput from '../SearchInput';

const NavBar = () => {
  return (
    <div className='flex w-full justify-between border border-red-500 p-2'>
      <div className='flex items-center space-x-4 pl-16'>
        <IconButton
          icon={<GoChevronLeft className='h-8 w-8' />}
          intent={'invisible'}
          className='text-white'
          size={'extraSmall'}
        />
        <IconButton
          icon={<GoChevronRight className='h-8 w-8' />}
          intent={'invisible'}
          className='text-white'
          size={'extraSmall'}
        />
      </div>
      <div className='flex items-center space-x-2'>
        <IconButton icon={<GoHome className='h-6 w-6' />} intent={'quaternary'} />
        <SearchInput size={'extraLarge'} placeholder='O que você quer ouvir ?' />
      </div>
      <div className='flex items-center space-x-2'>
        <IconButton
          icon={<GoBell className='h-5 w-5' />}
          intent={'invisible'}
          className='text-white'
          size={'extraSmall'}
        />
        <IconButton
          icon={<MdGroups className='h-5 w-5' />}
          intent={'invisible'}
          className='text-white'
          size={'extraSmall'}
        />
      </div>
    </div>
  );
};

export default NavBar;
