import { Button } from '../../components/Button';

const MainPage = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='flex w-full items-start space-x-3 rounded-t-lg border border-blue-50 p-4'>
        <Button intent={'quaternary'} className='bg-neutral-700/60 text-white hover:bg-neutral-600/60' size={'small'}>
          All
        </Button>
        <Button intent={'quaternary'} className='bg-neutral-700/60 text-white hover:bg-neutral-600/60' size={'small'}>
          Music
        </Button>
        <Button intent={'quaternary'} className='bg-neutral-700/60`` text-white hover:bg-neutral-600/60' size={'small'}>
          Podcasts
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
