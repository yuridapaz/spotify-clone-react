export const reducerCases = {
  // SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
  SET_USER: 'SET_USER',
  SET_PLAYLISTS: 'SET_PLAYLISTS'
  // SET_PLAYING: 'SET_PLAYING',
  // SET_PLAYER_STATE: 'SET_PLAYER_STATE',
  // SET_PLAYLIST: 'SET_PLAYLIST',
  // SET_PLAYLIST_ID: 'SET_PLAYLIST_ID'
};

export const requestUrl = {
  ME: 'https://api.spotify.com/v1/me',
  PLAYLISTS: 'https://api.spotify.com/v1/me/playlists/',
  PLAYLIST: 'https://api.spotify.com/v1/playlists/',
  ALBUMS: 'https://api.spotify.com/v1/me/albums',
  ARTISTS: 'https://api.spotify.com/v1/me/following?type=artist'
};
