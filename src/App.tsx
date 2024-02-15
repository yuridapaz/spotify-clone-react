import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formatHashToken } from './utils/function';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) console.log(formatHashToken(hash));
  });

  const link = `${import.meta.env.VITE_SPOTIFY_API_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URL}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=token&show_dialog=true`;

  return (
    <div className="h-screen w-full flex-1">
      <a href={link} target="_blank" rel="noopener noreferrer">
        Open Spotify Link
      </a>

    </div>
  );
};

export default App;
