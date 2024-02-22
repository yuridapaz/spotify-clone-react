import { useEffect } from 'react';
import { useStateProvider } from '../../utils/contextProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';

function SideBarPlaylists() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      const { items } = res.data;
      const playlists = items.map(({ name, id }: any) => ({ name, id })); //REVIEW (any) //
      console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <ul>
      <li>Lista</li>
      <li>Lista</li>
      <li>Lista</li>
      <li>Lista</li>
      <li>Lista</li>
    </ul>
  );
}

export default SideBarPlaylists;
