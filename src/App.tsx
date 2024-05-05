import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchAuthorization, getAuthorizationCode, useAccessToken } from './context/helpers';
import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import LoginPage from './pages/Login';
import SideBar from './components/SideBar';
import { spotifyLoginLink } from './utils/constants';
import { useMutation } from '@tanstack/react-query';
import { useStateProvider } from './context/contextProvider';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch, accessToken } = useStateProvider();
  const { mutate } = useAccessToken();

  useEffect(() => {
    if (!accessToken && location.search) {
      const code = getAuthorizationCode(location.search);
      mutate(code);
    }
  }, []);

  return (
    <>
      {accessToken ? (
        <div className='bg-black'>
          <div className='flex'>
            <SideBar />
            <Outlet />
          </div>
        </div>
      ) : (
        <LoginPage spotifyUrl={spotifyLoginLink} />
      )}
    </>
  );
};

export default App;
