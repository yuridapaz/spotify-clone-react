import { Button, IconButton } from '../../components/Button';
import { IoIosPlay, IoMdPlay } from 'react-icons/io';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { callApi } from '../../context/helpers';
import { requestUrl } from '../../reducer/constants';
import { useQuery } from '@tanstack/react-query';

const PlaylistPage = () => {
  const { playlistID } = useParams();
  const { data: playlistData } = useQuery({
    queryKey: ['playlist', playlistID],
    queryFn: () => callApi(requestUrl.PLAYLIST + playlistID)
  });
  const playlistOwner = playlistData?.owner?.href;
  const playlistTracks = playlistData?.tracks?.items;
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: () => callApi(playlistOwner),
    enabled: !!playlistOwner
  });

  const convertTrackDuration = (ms: any) => {
    let seconds: number | string = Math.floor((ms / 1000) % 60);
    let minutes: number | string = Math.floor((ms / (1000 * 60)) % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  };

  const convertTrackDate = (date: any) => {
    let newDate = new Date(date);

    console.log(newDate.toLocaleDateString());
    return newDate.toLocaleDateString();
  };

  console.log('playlistTracks:', playlistTracks);
  return (
    <div className='relative w-full overflow-auto rounded-md bg-neutral-900'>
      <div className='absolute left-0 right-0 top-0 h-[31rem] rounded-t-md bg-gradient-to-b from-genre-2/70 from-80%' />
      <div className='relative  flex w-full space-x-6 p-6 text-white'>
        <div className='min-w-28 max-w-52'>
          <img src={playlistData?.images[0]?.url} className='rounded-md shadow-sm' />
        </div>
        <div className='flex w-full flex-col justify-end space-y-2'>
          <p className='text-xs text-white/90'> {playlistData?.public ? 'Public' : ''} Playlist</p>
          <h1 className='text-8xl font-bold text-white'>{playlistData?.name}</h1>
          <h6 className='text-xs text-neutral-1'> {playlistData?.description} </h6>
          <div className='flex items-center  text-xs '>
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
        <table className='mt-4 table-auto border-separate border-spacing-y-3'>
          <thead className=''>
            <tr className=' text-sm text-neutral-1'>
              <th className=' border-b border-b-neutral-1 pb-2 pl-4 text-left font-light'>#</th>
              <th className=' border-b border-b-neutral-1 pb-2 text-left font-light'>Título</th>
              <th className=' border-b border-b-neutral-1 pb-2 text-left font-light'>Álbum</th>
              <th className=' border-b border-b-neutral-1 pb-2 text-left font-light'>Adicionada em</th>
              <th className=' border-b border-b-neutral-1 px-4 pb-2 font-light'>O</th>
            </tr>
          </thead>
          <tbody className=''>
            {playlistTracks?.map((track: any, index: any) => {
              return (
                <tr key={track?.track?.id} className='group text-neutral-1'>
                  <td className='rounded-l-md py-1 pl-4 text-left font-light group-hover:bg-white/15'>{index + 1}</td>
                  <td className='flex items-center space-x-2 py-1 text-left font-light group-hover:bg-white/15 '>
                    <img src={track?.track?.album?.images?.[2]?.url} className='h-10 w-10' />
                    <div>
                      <p className='text-white hover:cursor-pointer hover:underline'>{track?.track?.name}</p>
                      <div className='flex items-center text-sm'>
                        {track?.track?.explicit ? (
                          <span className='mr-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-neutral-1  text-[0.6rem] text-black'>
                            E
                          </span>
                        ) : (
                          ''
                        )}
                        <p className='hover:cursor-pointer hover:underline group-hover:text-white'>
                          {track?.track?.artists?.map((artist: any, i: any, arr: any) => {
                            if (i + 1 === arr.length) {
                              return artist.name;
                            } else {
                              return artist.name + ', ';
                            }
                          })}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='py-1 text-left text-sm font-light hover:cursor-pointer hover:underline group-hover:bg-white/15 group-hover:text-white'>
                    {track?.track?.album?.name}
                  </td>
                  <td className='py-1 pr-10 text-left font-light group-hover:bg-white/15'>
                    {convertTrackDate(track?.added_at)}
                  </td>
                  <td className='rounded-r-md px-4 py-1 font-light group-hover:bg-white/15'>
                    {convertTrackDuration(track?.track?.duration_ms)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;
