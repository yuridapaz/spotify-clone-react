import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAuthorizationCode, useAccessToken } from './context/helpers';

import Footer from './components/Footer';
import LoginPage from './pages/Login';
import NavBar from './components/Navbar';
import SideBar from './components/SideBar';
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
        <div className='flex h-screen max-h-screen min-h-screen flex-col bg-black'>
          <NavBar />
          <div className='flex h-full space-x-2 px-2'>
            <SideBar />
            <Outlet />
          </div>
          <Footer />
        </div>
      ) : (
        <LoginPage spotifyUrl={spotifyLoginLink} />
      )}
    </>
  );
};

export default App;
