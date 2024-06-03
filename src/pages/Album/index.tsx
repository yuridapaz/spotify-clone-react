import { Button, IconButton } from '../../components/Button';

import { FaList } from 'react-icons/fa';
import { IoMdPlay } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TrackComponent from './trackComponent';
import { callApi } from '../../context/helpers';
import { requestUrl } from '../../reducer/constants';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const AlbumPage = () => {
  const { albumID } = useParams();
  const { data: albumData } = useQuery({
    queryKey: ['album', albumID],
    queryFn: () => callApi(requestUrl.ALBUMS + albumID)
  });
  const albumTracks = albumData?.tracks?.items;
  const albumOwner = albumData?.artists?.[0]?.href;
  const { data: artistData } = useQuery({
    queryKey: ['artist'],
    queryFn: () => callApi(albumOwner),
    enabled: !!albumOwner
  });
  // console.log('albumData:', albumData);
  // console.log('artist:', artistData);
  console.log('albumTracks:', albumTracks);

  return (
    <div className='relative w-full overflow-auto rounded-md bg-neutral-900'>
      <div className='absolute left-0 right-0 top-0 h-[31rem] rounded-t-md bg-gradient-to-b from-genre-2/70 from-80%' />
      <div className='relative  flex w-full space-x-6 p-6 text-white'>
        <div className='min-w-28 max-w-52'>
          <img src={albumData?.images[0]?.url} className='rounded-md shadow-sm' />
        </div>
        <div className='flex w-full flex-col justify-end space-y-4'>
          <p className='text-xs capitalize text-white/90'> {albumData?.album_type}</p>
          <h1 className='text-7xl font-bold text-white'>{albumData?.name}</h1>
          <div className='flex items-center text-xs'>
            <img src={artistData?.images[0]?.url} className='mr-1 h-5 w-5 rounded-full' />
            <Link to={albumData?.owner?.external_urls?.spotify} className='mr-1 font-bold hover:underline'>
              {artistData?.name}
            </Link>
            <span className=''>• {albumData?.total_tracks} músicas, 21min 18s</span>
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
              <th className='border-b border-b-neutral-1  px-3 pb-2 text-left font-light'>#</th>
              <th className=' border-b border-b-neutral-1  pb-2 text-left font-light'>Título</th>
              <th className=' border-b border-b-neutral-1  px-4 pb-2 text-right font-light'>O</th>
            </tr>
          </thead>
          <tbody className=''>
            {albumTracks?.map((element: any, index: any) => {
              <TrackComponent element={element} number={element.track_number} key={index} />;
            })}
            {/* {playlistTracks?.map((element: any, index: any) => { */}
            {/* return <TrackComponent element={element} number={index + 1} key={index} />; */}
            {/* })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlbumPage;
