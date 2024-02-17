import { useEffect } from 'react';
import { useStateProvider } from '../../utils/contextProvider';
import axios from 'axios';

function SideBarPlaylists() {
  const [{ token, dispatch }] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
    };
  }, [token, dispatch]);

  return (
    <ul>
      <li>Lista 1</li>
      <li>Lista 2</li>
      <li>Lista 3</li>
      <li>Lista 4</li>
      <li>Lista 5</li>
    </ul>
  );
}

export default SideBarPlaylists;
