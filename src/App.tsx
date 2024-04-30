import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAuthorizationCode, useAccessToken } from './context/helpers';

import LoginPage from './pages/Login';
import NavBar from './components/Navbar';
import SideBar from './components/SideBar';
import { spotifyLoginLink } from './utils/constants';
import { useStateProvider } from './context/contextProvider';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch, accessToken } = useStateProvider();

  if (!accessToken && location.search) {
    const code = getAuthorizationCode(location.search);
    useAccessToken(code);
  }

  return (
    <>
      {accessToken ? (
        <div className='bg-black'>
          <div className='flex '>
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
