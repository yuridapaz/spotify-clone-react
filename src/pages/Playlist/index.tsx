import React, { useEffect } from 'react';

import axios from 'axios';
import { reducerCases } from '../../utils/constants';
import { useStateProvider } from '../../utils/contextProvider';

const PlaylistPage = () => {
  const [{ token, selectedPlaylistID }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayList = async () => {
      const res = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistID}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });

      // const { items } = res.data.tracks;
      // const playlists = items.map(({ name, id }: { name: string; id: string }) => ({ name, id }));
      // dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlayList();
  }, [token, dispatch]);

  return <div>PlaylistPage</div>;
};

export default PlaylistPage;
