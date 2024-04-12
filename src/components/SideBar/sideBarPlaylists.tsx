import { Link } from 'react-router-dom';
import axios from 'axios';
import { reducerCases } from '../../reducer/constants';
import { useEffect } from 'react';
import { useStateProvider } from '../../context/contextProvider';

// type PlaylistDisplayType = { name: string; id: string };

const SideBarPlaylists = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      const { items }: any = res.data;
      const playlists = items.map(({ name, id }: { name: string; id: string }) => ({ name, id }));
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <ul className='flex h-[570px] w-full flex-col overflow-auto'>
      {playlists
        ? playlists.map((playlist: { name: string; id: string }) => (
            <li className='px-3 py-2' key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))
        : ''}
    </ul>
  );
};

export default SideBarPlaylists;
