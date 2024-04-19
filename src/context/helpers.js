import axios from 'axios';

export const getAuthorizationCode = (urlSearch) => {
  const urlParams = new URLSearchParams(urlSearch);
  const urlCode = urlParams.get('code');
  return urlCode;
};

export const fetchAccessToken = (authorizationCode) => {
  const axiosPostData = {
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI
  };
  return callAuthorizationApi(axiosPostData);
};

export const refreshAccessToken = () => {
  const refreshToken = localStorage.getItem('spotify_refresh_token');
  const axiosPostData = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: import.meta.env.VITE_SPOTIFY_API_CLIENT_ID
  };
  return callAuthorizationApi(axiosPostData);
};

const callAuthorizationApi = async (postData) => {
  const apiTokenUrl = import.meta.env.VITE_SPOTIFY_API_TOKEN_URL;
  const options = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(import.meta.env.VITE_SPOTIFY_API_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET)
    }
  };

  try {
    const { data } = await axios.post(apiTokenUrl, postData, options);
    if (data.access_token) localStorage.setItem('spotify_access_token', data.access_token);
    if (data.refresh_token) localStorage.setItem('spotify_refresh_token', data.refresh_token);
    return data.access_token;
  } catch (error) {
    if (error.response === 401) {
      refreshAccessToken();
    } else {
      console.log(error.response);
    }
  }
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
    if (error.response.status === 401) refreshAccessToken();
  }
};
