import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { requestUrl } from '../reducer/constants';

export const getAuthorizationCode = (urlSearch) => {
  const urlParams = new URLSearchParams(urlSearch);
  const urlCode = urlParams.get('code');
  return urlCode;
};

const fetchAuthorization = async (authorizationCode) => {
  const postData = {
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI
  };
  const apiTokenUrl = import.meta.env.VITE_SPOTIFY_API_TOKEN_URL;
  const options = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(import.meta.env.VITE_SPOTIFY_API_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET)
    }
  };
  const { data } = await axios.post(apiTokenUrl, postData, options);
  return data;
};

const fetchRefreshToken = async () => {
  const refreshToken = localStorage.getItem('spotify_refresh_token');
  const postData = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: import.meta.env.VITE_SPOTIFY_API_CLIENT_ID
  };
  const apiTokenUrl = import.meta.env.VITE_SPOTIFY_API_TOKEN_URL;
  const options = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(import.meta.env.VITE_SPOTIFY_API_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET)
    }
  };
  const { data } = await axios.post(apiTokenUrl, postData, options);
  setLocalToken('access_token', data.access_token);
};

export const useAccessToken = () => {
  const query = useMutation({
    mutationFn: fetchAuthorization,
    onSuccess: (data) => {
      setLocalToken('access_token', data.access_token);
      setLocalToken('refresh_token', data.refresh_token);
    },
    onError: () => {}
  });
  return query;
};

export const callApi = async (requestUrl) => {
  const accessToken = localStorage.getItem('spotify_access_token');
  const options = {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };

  try {
    const { data } = await axios.get(requestUrl, options);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      fetchRefreshToken();
      return callApi(requestUrl);
    }
  }
};

export const setLocalToken = (type, token) => {
  switch (type) {
    case 'access_token':
      localStorage.setItem('spotify_access_token', token);
      break;
    case 'refresh_token':
      localStorage.setItem('spotify_refresh_token', token);
      break;
    default:
      break;
  }
};

/// NEW ///

export const useFetchPlaylists = () => {
  return useQuery({
    queryKey: ['playlists'],
    queryFn: () => callApi(requestUrl.PLAYLISTS)
  });
};

export const useFetchAlbums = () => {
  return useQuery({
    queryKey: ['albums'],
    queryFn: () => callApi(requestUrl.ALBUMS)
  });
};

export const useFetchArtists = () => {
  return useQuery({
    queryKey: ['artists'],
    queryFn: () => callApi(requestUrl.ARTISTS)
  });
};
