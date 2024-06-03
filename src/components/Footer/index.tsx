import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6';
import { LuMic2, LuPlaySquare, LuRepeat1, LuVolume2 } from 'react-icons/lu';

import { FaPlay } from 'react-icons/fa';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { IconButton } from '../Button';
import { MdOutlineOpenInFull } from 'react-icons/md';
import { TiArrowShuffle } from 'react-icons/ti';
import { useStateProvider } from '../../context/contextProvider';

const Footer = () => {
  const { state, dispatch } = useStateProvider();

  const handleClick = () => {
    dispatch({ type: 'changeName', name: 'Novo' });
  };

  return (
    <div className='flex h-32  justify-between  text-white'>
      <div className='w-full'>
        <img src='' />
        <p>{state.name}</p>
        <span>Artists</span>
      </div>
      {/* MID */}
      <div className='flex w-full flex-col items-center justify-center space-y-4'>
        <div className='flex items-center space-x-4'>
          <IconButton
            icon={<TiArrowShuffle className='h-5 w-5' />}
            size={'extraSmall'}
            intent={'invisible'}
            className='hover:text-white'
          />
          <IconButton
            icon={<FaBackwardStep className='h-5 w-5' />}
            size={'extraSmall'}
            intent={'invisible'}
            className='hover:text-white'
          />
          <IconButton
            icon={<FaPlay className='h-5 w-5 pl-1' />}
            size={'small'}
            intent={'secondary'}
            className='px-1 py-1 hover:scale-105'
            // onClick={}
          />
          <IconButton
            icon={<FaForwardStep className='h-5 w-5' />}
            size={'extraSmall'}
            intent={'invisible'}
            className='hover:text-white'
          />
          <IconButton
            icon={<LuRepeat1 className='h-5 w-5' />}
            size={'extraSmall'}
            intent={'invisible'}
            className='hover:text-white'
          />
        </div>
        <div className='flex w-full items-center space-x-3 text-sm text-neutral-1'>
          <p>0:02</p>
          <input type='range' min='1' max='100' className='h-1 w-full accent-neutral-1 hover:accent-green-500' />
          <p>6:31</p>
        </div>
      </div>
      {/* END */}
      <div className='flex w-full items-center justify-end'>
        <IconButton
          icon={<LuPlaySquare className='h-4 w-4' />}
          size={'extraSmall'}
          intent={'invisible'}
          className='hover:text-white'
        />
        <IconButton
          icon={<LuMic2 className='h-4 w-4' />}
          size={'extraSmall'}
          intent={'invisible'}
          className='hover:text-white'
        />
        <IconButton
          icon={<HiOutlineQueueList className='h-4 w-4' />}
          size={'extraSmall'}
          intent={'invisible'}
          className='hover:text-white'
        />
        <IconButton
          icon={<LuVolume2 className='h-4 w-4' />}
          size={'extraSmall'}
          intent={'invisible'}
          className='hover:text-white'
        />
        <input type='range' min='1' max='100' className='h-1 w-28 accent-white hover:accent-green-500' />
        <IconButton
          icon={<MdOutlineOpenInFull className='h-4 w-4' />}
          size={'extraSmall'}
          intent={'invisible'}
          className='hover:text-white'
        />
      </div>
    </div>
  );
};

export default Footer;
