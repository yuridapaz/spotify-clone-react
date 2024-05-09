import { Button } from '../../components/Button';

const MainPage = () => {
  return (
    <div className='w-full rounded-md bg-neutral-900'>
      <div className=''>
        <Button intent={'tertiary'} className='bg-neutral-700/60 text-white hover:bg-neutral-600/60' size={'small'}>
          All
        </Button>
        <Button intent={'tertiary'} className='bg-neutral-700/60 text-white hover:bg-neutral-600/60' size={'small'}>
          Music
        </Button>
        <Button intent={'tertiary'} className='bg-neutral-700/60`` text-white hover:bg-neutral-600/60' size={'small'}>
          Podcasts
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
