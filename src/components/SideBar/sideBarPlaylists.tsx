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
    <ul className=''>
      {state.playlists
        ? state.playlists.map((playlist: { name: string; id: string }) => (
            <li className='' key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))
        : ''}{' '}
      {state.playlists
        ? state.playlists.map((playlist: { name: string; id: string }) => (
            <li className='' key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))
        : ''}{' '}
      {state.playlists
        ? state.playlists.map((playlist: { name: string; id: string }) => (
            <li className='' key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))
        : ''}{' '}
      {state.playlists
        ? state.playlists.map((playlist: { name: string; id: string }) => (
            <li className='' key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))
        : ''}
    </ul>
  );
};

export default SideBarPlaylists;
