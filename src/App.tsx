import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formatHashToken } from './utils/function';
import SideBar from './components/SideBar';
import { useStateProvider } from './utils/contextProvider';
import { reducerCases } from './utils/constants';
import NavBar from './components/Navbar';

const App = () => {
  const location = useLocation();
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const token = formatHashToken(hash);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  const link = `${import.meta.env.VITE_SPOTIFY_API_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URL}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=token&show_dialog=true`;

  return (
    <div>
      {token ? (
        <div className="flex h-screen w-full flex-col bg-slate-300 text-white">
          <div className="flex h-full w-full">
            {/* sidebar */}
            <SideBar />
            {/* main div */}
            <div className="flex w-full flex-col bg-secondary-2">
              {/* navbar */}
              <NavBar />
              {/* main */}
              <div className="h-full">main</div>
            </div>
          </div>
          <div className="flex h-32 border-t border-t-neutral-3 bg-secondary-2">footer</div>
        </div>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Open Spotify Link
        </a>
      )}
    </div>
  );
};

export default App;
