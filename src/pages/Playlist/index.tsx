import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { callApi } from '../../context/helpers';
import { requestUrl } from '../../reducer/constants';
import { useQuery } from '@tanstack/react-query';

const PlaylistPage = () => {
  const { playlistID } = useParams();
  const { data } = useQuery({
    queryKey: ['playlist', playlistID],
    queryFn: () => callApi(requestUrl.PLAYLIST + playlistID)
  });
  console.log(data);

  return (
    <div className='relative w-full rounded-md bg-neutral-900'>
      <div className='absolute left-0 right-0 top-0 h-80 rounded-t-md bg-gradient-to-b from-red-600 from-80%' />
      <div className='relative flex w-full space-x-4 border border-slate-50 p-5 text-white'>
        <div className='min-w-28 max-w-52 border border-blue-50'>
          <img src={data?.images[0]?.url} alt='' />
        </div>
        <div className='flex w-full flex-col justify-end border border-red-50'>
          <p className=''>Playlist</p>
          <h1 className='text-2xl font-bold'>{data?.name}</h1>
          <div className=''>
            <img src={''} alt='' />
            <p className=''>{data?.owner?.display_name}</p>
            <span className=''>
              {data?.tracks?.items?.length}+{data?.followers?.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
