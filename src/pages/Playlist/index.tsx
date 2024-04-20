import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { callApi } from '../../context/helpers';
import { requestUrl } from '../../reducer/constants';

const PlaylistPage = () => {
  const { playlistID } = useParams();
  const accessToken = localStorage.getItem('spotify_access_token');

  useEffect(() => {
    const getPlaylist = async () => {
      callApi(accessToken, requestUrl.PLAYLIST + playlistID, handlePlaylist);
    };
    getPlaylist();
  }, []);

  const handlePlaylist = (data: any) => {};

  return <div>PlaylistPage</div>;
};

export default PlaylistPage;
