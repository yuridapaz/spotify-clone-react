import { Button } from '../Button';
import { IoLibrary } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { callApi } from '../../context/helpers';
import { reducerCases } from '../../reducer/constants';
import { useEffect } from 'react';
import { useStateProvider } from '../../context/contextProvider';

const SideBar = () => {
  const { state, dispatch, accessToken } = useStateProvider();

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
    <div className=''>
      <div className=''>
        <Button leadingIcon={<IoLibrary className='h-6 w-6' />} intent={'invisible'} className=''>
          Your Library
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
