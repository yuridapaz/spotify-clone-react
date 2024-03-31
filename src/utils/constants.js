export const reducerCases = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USER: 'SET_USER',
  SET_PLAYLISTS: 'SET_PLAYLISTS',
  SET_PLAYING: 'SET_PLAYING',
  SET_PLAYER_STATE: 'SET_PLAYER_STATE',
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_PLAYLIST_ID: 'SET_PLAYLIST_ID'
};

export const spotifyLoginLink = `${import.meta.env.VITE_SPOTIFY_API_AUTHORIZE_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=code&show_dialog=true`;
