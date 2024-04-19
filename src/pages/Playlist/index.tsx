import React, { useEffect } from 'react';

const PlaylistPage = () => {
  useEffect(() => {
    const getPlaylist = async () => {
      console.log('Playlist');
    };
    getPlaylist();
  }, []);

  return <div>PlaylistPage</div>;
};

export default PlaylistPage;
