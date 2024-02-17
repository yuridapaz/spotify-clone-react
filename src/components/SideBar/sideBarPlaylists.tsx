import { useEffect } from 'react';
import { useStateProvider } from '../../utils/contextProvider';
import axios from 'axios';

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
      console.log(res);
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
