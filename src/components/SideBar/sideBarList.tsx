import { reducerCases, requestUrl } from '../../reducer/constants';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useFetchApi } from '../../context/helpers';
import { useStateProvider } from '../../context/contextProvider';

const SideBarList = () => {
  const { dispatch, state } = useStateProvider();
  const [first, setFirst] = useState([]);

  const handlePlaylists = (data: any) => {
    dispatch({ type: reducerCases.SET_PLAYLISTS, playlists: data.items });
  };

  const { data, isFetching, isLoading, isSuccess, status } = useFetchApi(
    'playlists',
    requestUrl.PLAYLISTS,
    handlePlaylists
  );

  return (
    <div>
      <ul>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
        <Link to={'/'}>
          <li>Lista</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarList;
