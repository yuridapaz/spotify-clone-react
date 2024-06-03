import { Button, IconButton } from '../../components/Button';

import { FaList } from 'react-icons/fa';
import { IoMdPlay } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TrackComponent from './trackComponent';
import { callApi } from '../../context/helpers';
import { requestUrl } from '../../reducer/constants';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const PlaylistPage = () => {
  const { playlistID } = useParams();

  const { data: playlistData } = useQuery({
    queryKey: ['playlist', playlistID],
    queryFn: () => callApi(requestUrl.PLAYLISTS + playlistID)
  });
  const playlistOwner = playlistData?.owner?.href;
  const playlistTracks = playlistData?.tracks?.items;
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: () => callApi(playlistOwner),
    enabled: !!playlistOwner
  });

  return (
    <div className='relative w-full overflow-auto rounded-md bg-neutral-900'>
      <div className='absolute left-0 right-0 top-0 h-[31rem] rounded-t-md bg-gradient-to-b from-genre-2/70 from-80%' />
      <div className='relative flex w-full space-x-6 p-6 text-white'>
        <div className='min-w-28 max-w-52'>
          <img src={playlistData?.images[0]?.url} className='rounded-md shadow-sm' />
        </div>
        <div className='flex w-full flex-col justify-end space-y-4'>
          <p className='text-xs text-white/90'> {playlistData?.public ? 'Public' : ''} Playlist</p>
          <h1 className='text-7xl font-bold text-white'>{playlistData?.name}</h1>
          <h6 className='text-xs text-neutral-1'> {playlistData?.description} </h6>
          <div className='flex items-center text-xs'>
            <img src={userData?.images[0]?.url} className='mr-1 h-5 w-5 rounded-full' />
            <Link to={playlistData?.owner?.external_urls?.spotify} className='mr-1 hover:underline'>
              {playlistData?.owner?.display_name}
            </Link>
            <span className=''>
              • {playlistData?.followers?.total.toLocaleString('en')} likes • {playlistData?.tracks?.items?.length}{' '}
              songs
            </span>
          </div>
        </div>
      </div>
      <div className='relative flex w-full flex-col bg-neutral-900/20 p-6'>
        <div className='flex items-center justify-between'>
          <IconButton icon={<IoMdPlay />} size={'large'} className='text-2xl' />
          <Button intent={'invisible'} trailingIcon={<FaList />} className=' text-white'>
            Lista
          </Button>
        </div>
        <table className='mt-6 table-auto border-separate border-spacing-0'>
          <thead className=''>
            <tr className=' text-sm text-neutral-1'>
              <th className='border-b border-b-neutral-1  px-3 pb-2 text-center font-light'>#</th>
              <th className=' border-b border-b-neutral-1  pb-2 text-left font-light'>Título</th>
              <th className=' border-b border-b-neutral-1  pb-2 text-left font-light'>Álbum</th>
              <th className=' border-b border-b-neutral-1  pb-2 text-left font-light'>Adicionada em</th>
              <th className=' border-b border-b-neutral-1  px-4 pb-2 text-center font-light'>O</th>
            </tr>
          </thead>
          <tbody className=''>
            {playlistTracks?.map((element: any, index: any) => {
              return <TrackComponent element={element} number={index + 1} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;
