import { useMutation, useQuery } from '@tanstack/react-query';

import axios from 'axios';

export const getAuthorizationCode = (urlSearch) => {
  const urlParams = new URLSearchParams(urlSearch);
  const urlCode = urlParams.get('code');
  return urlCode;
};

export const fetchAuthorization = async (authorizationCode) => {
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
  console.log(data);
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

export const useAccessToken = () => {
  const query = useMutation({
    mutationFn: fetchAuthorization
  });

  // const query = useQuery({
  //   queryKey: ['access_token', 'refresh_token'],
  //   queryFn: () => fetchAuthorization(authorizationCode),
  //   enabled: !!authorizationCode,
  //   refetchOnWindowFocus: false
  // });

  // if (query?.failureReason?.request?.status === 401) fetchRefreshToken();

  // if (query?.data?.access_token) {
  //   setLocalToken('access_token', query.data.access_token);
  //   setLocalToken('refresh_token', query.data.refresh_token);
  // }

  return query;
};

export const useRefreshToken = () => {
  const query = useQuery({
    queryKey: ['access_token', 'refresh_token'],
    queryFn: () => fetchRefreshToken(),
    refetchOnWindowFocus: false
  });
  setLocalToken('access_token', query.data.access_token);
};

export const callApi = async (requestUrl) => {
  const accessToken = localStorage.getItem('spotify_access_token');
  const options = {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };
  const { data } = await axios.get(requestUrl, options);
  return data;
};

export const useFetchApi = async (requestUrl, handleCallbackFunction) => {
  const query = useQuery({
    queryKey: [''],
    queryFn: () => callApi(requestUrl),
    refetchOnWindowFocus: false
  });
  if (query?.failureReason?.request?.status === 401) fetchRefreshToken();
  //
  handleCallbackFunction(query.data);
  //
};

////
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
