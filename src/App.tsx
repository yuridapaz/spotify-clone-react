import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { callApi, fetchAccessToken, getAuthorizationCode } from './context/helpers';
import { reducerCases, requestUrl } from './reducer/constants';

import { Button } from './components/Button';
import LoginPage from './pages/Login';
import NavBar from './components/Navbar';
import SideBar from './components/SideBar';
import { spotifyLoginLink } from './utils/constants';
import { useEffect } from 'react';
import { useStateProvider } from './context/contextProvider';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch, accessToken } = useStateProvider();

  useEffect(() => {
    const handleLoadApp = async () => {
      if (!accessToken && location.search) {
        const code = getAuthorizationCode(location.search);
        await fetchAccessToken(code);
      }
      if (accessToken) callApi(accessToken, requestUrl.ME, handleUserResponse);
      navigate('/');
    };
    handleLoadApp();
  }, []);

  const handleUserResponse = (userData: any) => {
    dispatch({ type: reducerCases.SET_USER, user: userData });
  };

  // REVIEW:
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const scrollDemoRef = useRef(null);
  // const handleScroll = () => {
  //   if (scrollDemoRef.current) {
  //     const { scrollTop } = scrollDemoRef.current;
  //     setScrollPosition(scrollTop);
  //   }
  // };
  // scrollTop 150/155
  // REVIEW: END

  return (
    <>
      {accessToken ? (
        <div className=''>
          <NavBar />
          <div className=''>
            <SideBar />
            {/* <Outlet /> */}
          </div>
        </div>
      ) : (
        <LoginPage spotifyUrl={spotifyLoginLink} />
      )}
    </>
  );
};

export default App;
