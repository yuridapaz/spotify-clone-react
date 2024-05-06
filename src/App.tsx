import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAuthorizationCode, useAccessToken, useFetchApi, useRefreshToken } from './context/helpers';

import LoginPage from './pages/Login';
import SideBar from './components/SideBar';
import { requestUrl } from './reducer/constants';
import { spotifyLoginLink } from './utils/constants';
import { useEffect } from 'react';
import { useStateProvider } from './context/contextProvider';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accessToken } = useStateProvider();
  const { mutate } = useAccessToken();

  useEffect(() => {
    if (!accessToken && location.search) {
      const code = getAuthorizationCode(location.search);
      mutate(code, {
        onSuccess: () => {
          navigate('/'), navigate(0);
        }
      });
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
