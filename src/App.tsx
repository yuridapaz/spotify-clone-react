import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formatHashToken } from './utils/function';
import SideBar from './components/SideBar';
import { useStateProvider } from './utils/contextProvider';
import { reducerCases } from './utils/constants';
import NavBar from './components/Navbar';
import axios from 'axios';
import SearchInput from './components/SearchInput';

const App = () => {
  const location = useLocation();
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    // REVIEW: Page login to get hash token //
    const hash = location.hash;
    if (hash) {
      const token = formatHashToken(hash);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
    // REVIEW: END//
    const getUserInfo = async () => {
      let options = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      };
      const { data } = await axios.get('https://api.spotify.com/v1/me', options);
    };
    getUserInfo();
  }, [token, dispatch]);

  const link = `${import.meta.env.VITE_SPOTIFY_API_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URL}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=token&show_dialog=true`;

  return (
    <div>
      {token ? (
        <div className="flex h-screen w-full flex-col overflow-hidden bg-slate-300 text-white">
          <div className="flex h-[calc(100%-8rem)] w-full">
            {/* sidebar */}
            <SideBar />
            {/* main div */}
            <div className="flex w-full flex-col bg-secondary-2">
              {/* navbar */}
              <NavBar />
              {/* main */}
              <div className="h-full space-y-6">
                <SearchInput size={'small'} />
                <SearchInput size={'medium'} />
                <SearchInput size={'large'} />
                <SearchInput size={'extraLarge'} />
              </div>
            </div>
          </div>
          <div className="flex h-32 border-t border-t-neutral-3 bg-secondary-2">footer</div>
        </div>
      ) : (
        <a href={link} rel="noopener noreferrer">
          Open Spotify Link
        </a>
      )}
    </div>
  );
};

export default App;
