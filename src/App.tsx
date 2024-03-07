import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatHashToken } from './utils/function';
import SideBar from './components/SideBar';
import { useStateProvider } from './utils/contextProvider';
import { reducerCases } from './utils/constants';
import NavBar from './components/Navbar';
import axios from 'axios';

const App = () => {
  const location = useLocation();
  const [{ token }, dispatch] = useStateProvider();
  const link = `${import.meta.env.VITE_SPOTIFY_API_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URL}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=token&show_dialog=true`;

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const token = formatHashToken(hash);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
    const getUserInfo = async () => {
      let options = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      };
      const { data } = await axios.get('https://api.spotify.com/v1/me', options);
      dispatch({ type: reducerCases.SET_USER, user: data });
    };
    getUserInfo();
  }, [token, dispatch]);

  // REVIEW:
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollDemoRef = useRef(null);
  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollTop } = scrollDemoRef.current;
      setScrollPosition(scrollTop);
    }
  };
  // scrollTop 150/155
  // REVIEW: END

  return (
    <>
      {token ? (
        <div className="flex h-screen w-full max-w-full flex-col overflow-hidden bg-slate-300 text-white">
          <div className=" flex h-[calc(100%-8rem)] w-full">
            {/* sidebar */}

            <SideBar />
            {/* main component */}
            <div
              className="relative flex h-screen w-full flex-col overflow-auto bg-secondary-2"
              id="scrollDemo"
              ref={scrollDemoRef}
              onScroll={handleScroll}
            >
              {/*  */}
              <div className="absolute left-0 right-0 z-0 h-60 bg-gradient-to-b from-indigo-500/50" />
              {/* navbar */}
              <NavBar />
              {/* main area */}
              <div className="z-10 flex w-full flex-col ">
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
              </div>
            </div>
          </div>
          <div className="flex h-32 w-full overflow-auto border-t border-t-neutral-3 bg-secondary-2">
            Footer
          </div>
        </div>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Open Spotify Link
        </a>
      )}
    </>
  );
};

export default App;
