import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const getAuthorizationCode = (urlSearch) => {
  const urlParams = new URLSearchParams(urlSearch);
  const urlCode = urlParams.get('code');
  return urlCode;
};

const fetchAccessToken = async (authorizationCode) => {
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
  console.log(data);
  return data;
};

export const useAccessToken = (authorizationCode) => {
  const query = useQuery({
    queryKey: ['access_token', 'refresh_token'],
    queryFn: () => fetchAccessToken(authorizationCode),
    enabled: !!authorizationCode,
    refetchOnWindowFocus: false
  });

  if (query?.failureReason?.request?.status === 401) {
    fetchRefreshToken();
  }
  setLocalToken('access_token', query.data.access_token);
  setLocalToken('refresh_token', query.data.refresh_token);
};

export const useRefreshToken = () => {
  const query = useQuery({
    queryKey: ['access_token', 'refresh_token'],
    queryFn: () => fetchRefreshToken(),
    refetchOnWindowFocus: false
  });
  console.log(query.data);
  setLocalToken('access_token', query.data.access_token);
};

export const callApi = async (accessToken, requestUrl, handleCallBack) => {
  const options = {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };

  try {
    const { data } = await axios.get(requestUrl, options);
    handleCallBack(data);
  } catch (error) {
    // if (error.response.status === 401) refreshAccessToken();
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
