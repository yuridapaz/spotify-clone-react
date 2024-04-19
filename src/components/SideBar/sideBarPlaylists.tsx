import { reducerCases, requestUrl } from '../../reducer/constants';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { callApi } from '../../context/helpers';
import { useEffect } from 'react';
import { useStateProvider } from '../../context/contextProvider';

const SideBarPlaylists = () => {
  const { state, dispatch } = useStateProvider();
  const accessToken = localStorage.getItem('spotify_access_token');

  useEffect(() => {
    if (accessToken) {
      callApi(accessToken, `https://api.spotify.com/v1/me/playlists`, handlePlaylistResponse);
    }
  }, []);

  const handlePlaylistResponse = async (data: any) => {
    const playlists = data.items.map(({ name, id }: { name: string; id: string }) => ({ name, id }));
    dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
  };

  return (
    <ul className='flex h-[570px] w-full flex-col overflow-auto'>
      {state.playlists
        ? state.playlists.map((playlist: { name: string; id: string }) => (
            <li className='overflow-hidden text-ellipsis whitespace-nowrap px-3 py-1.5' key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))
        : ''}
    </ul>
  );
};

export default SideBarPlaylists;
