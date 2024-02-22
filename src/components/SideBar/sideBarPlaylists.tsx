import { useEffect } from 'react';
import { useStateProvider } from '../../utils/contextProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';
import { Link } from 'react-router-dom';

function SideBarPlaylists() {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      const { items } = res.data;
      const playlists = items.map(({ name, id }: any) => ({ name, id })); // REVIEW (any) //
      // console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <ul className=" flex h-[570px] w-full flex-col overflow-auto">
      {playlists
        ? playlists.map((playlist: any) => (
            <>
              {' '}
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>{' '}
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>{' '}
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>{' '}
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>{' '}
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>{' '}
              <li className="px-3 py-2" key={playlist.id}>
                <Link to={''} className="">
                  {playlist.name}
                </Link>
              </li>
            </>
          ))
        : ''}
    </ul>
  );
}

export default SideBarPlaylists;
