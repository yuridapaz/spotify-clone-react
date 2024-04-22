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
        <>
          <div className='flex h-screen w-full max-w-full flex-col overflow-hidden bg-black'>
            <NavBar />
            <div className='flex h-full space-x-2 p-4'>
              <SideBar />
              <div className='flex h-full w-full flex-col bg-neutral-800'>
                <div className='flex w-full items-start space-x-3 rounded-t-lg border border-blue-50 p-4'>
                  <Button
                    intent={'quaternary'}
                    className='bg-neutral-700/60 text-white hover:bg-neutral-600/60'
                    size={'small'}
                  >
                    All
                  </Button>
                  <Button
                    intent={'quaternary'}
                    className='bg-neutral-700/60 text-white hover:bg-neutral-600/60'
                    size={'small'}
                  >
                    Music
                  </Button>
                  <Button
                    intent={'quaternary'}
                    className='bg-neutral-700/60`` text-white hover:bg-neutral-600/60'
                    size={'small'}
                  >
                    Podcasts
                  </Button>
                </div>
                <Outlet />
              </div>
            </div>
          </div>
          {/* <div className='flex h-screen w-full max-w-full flex-col overflow-hidden bg-slate-300 text-white'>
            <div className=' flex h-[calc(100%-8rem)] w-full'>
              <SideBar />
              <div
                className='relative flex  w-full flex-col overflow-auto bg-secondary-2'
                id='scrollDemo'
                // ref={scrollDemoRef}
                // onScroll={handleScroll}
              >
                <div className='absolute left-0 right-0 z-0 h-60 bg-gradient-to-b from-indigo-500/50' />

                <Outlet />
              </div>
            </div>
            <div className='flex h-32 w-full overflow-auto border-t border-t-neutral-3 bg-secondary-2'>
              {state?.user?.display_name}
            </div>
          </div> */}
        </>
      ) : (
        <LoginPage spotifyUrl={spotifyLoginLink} />
      )}
    </>
  );
};

export default App;
