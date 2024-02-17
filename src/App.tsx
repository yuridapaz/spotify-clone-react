import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formatHashToken } from './utils/function';
import SideBar from './components/SideBar';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) console.log(formatHashToken(hash));
  });
  // const link = `${import.meta.env.VITE_SPOTIFY_API_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URL}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=token&show_dialog=true`;

  return (
    <div className="flex h-screen w-full flex-col bg-slate-300 text-white">
      {/* <a href={link} target="_blank" rel="noopener noreferrer">
        Open Spotify Link
      </a> */}
      <div className="flex h-full w-full">
        {/* sidebar */}
        <SideBar />
        {/* main div */}
        <div className="flex w-full flex-col bg-secondary-2">
          {/* navbar */}
          <div className="h-20">navbar</div>
          {/* main */}
          <div className="h-full">main</div>
        </div>
      </div>
      <div className="flex h-32 border-t border-t-neutral-3 bg-secondary-2">footer</div>
    </div>
  );
};

export default App;
