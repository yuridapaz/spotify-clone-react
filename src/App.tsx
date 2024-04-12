import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  callApi,
  fetchAccessToken,
  getAuthorizationCode,
  handleUserResponse,
  refreshAccessToken
} from './context/helpers';
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
  const accessToken = localStorage.getItem('spotify_access_token');
  const { state, dispatch } = useStateProvider();

  useEffect(() => {
    //
    const handleLoadApp = async () => {
      if (!accessToken && location.search) {
        const code = getAuthorizationCode(location.search);
        const token = await fetchAccessToken(code);
        dispatch({ type: reducerCases.SET_ACCESS_TOKEN, token });
      }

      if (accessToken && state.token === null) {
        dispatch({ type: reducerCases.SET_ACCESS_TOKEN, token: accessToken });
      }

      navigate('/');
    };

    handleLoadApp();
  }, [state.token, dispatch]);

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
      <LoginPage spotifyUrl={spotifyLoginLink} />
    </>
  );
};

export default App;
