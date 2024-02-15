export const formatHashToken = (hash) => hash.slice(14, -34);

// hash.substring(1).split('&')[0].split('=')[1];
// hash.slice(14, -34);
// hash.replace('&token_type=Bearer&expires_in=3600', '').replace('#access_token=', '');
