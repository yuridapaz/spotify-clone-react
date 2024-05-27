import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Link } from 'react-router-dom';
import { callApi } from '../../context/helpers';
import { requestUrl } from '../../reducer/constants';
import { useQuery } from '@tanstack/react-query';

const PlaylistPage = () => {
  const { playlistID } = useParams();
  const { data } = useQuery({
    queryKey: ['playlist', playlistID],
    queryFn: () => callApi(requestUrl.PLAYLIST + playlistID)
  });
  return (
    <div className='relative w-full rounded-md bg-neutral-900'>
      {/* <div className='absolute left-0 right-0 top-0 h-80 rounded-t-md bg-gradient-to-b from-genre-2 from-80%' /> */}
      <div className='relative flex w-full space-x-4  p-5 text-white'>
        <div className='min-w-28 max-w-52 '>
          <img src={data?.images[0]?.url} alt='' className='rounded-md' />
        </div>
        <div className='flex w-full flex-col justify-end space-y-2'>
          <p className='text-base text-white/90'> {data?.public ? 'Public' : ''} Playlist</p>
          <h1 className='text-7xl font-bold text-white'>{data?.name}</h1>
          <h6 className='text-sm text-neutral-1'> {data?.description} </h6>
          <div className='flex space-x-3'>
            {/* <img src={''} alt='' /> */}
            <Link to={data?.owner?.external_urls?.spotify}>
              <p className=''>{data?.owner?.display_name}</p>
            </Link>
            <span className=''>
              {data?.tracks?.items?.length} songs • {data?.followers?.total.toLocaleString('en')} likes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
