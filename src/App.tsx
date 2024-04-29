import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  callApi,
  fetchAccessToken,
  getAuthorizationCode,
  handleAccessAuthorization,
  useHandleAccessAuthorization,
  useQueryTokenTest
} from './context/helpers';
import { reducerCases, requestUrl } from './reducer/constants';

import LoginPage from './pages/Login';
import NavBar from './components/Navbar';
import SideBar from './components/SideBar';
import axios from 'axios';
import { spotifyLoginLink } from './utils/constants';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useStateProvider } from './context/contextProvider';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch, accessToken } = useStateProvider();

  // useEffect(() => {
  //   const handleLoadApp = async () => {
  //     if (!accessToken && location.search) {
  //       const code = getAuthorizationCode(location.search);
  //       await fetchAccessToken(code);
  //     }
  //     if (accessToken) callApi(accessToken, requestUrl.ME, handleUserResponse);

  //     navigate('/');
  //   };
  //   handleLoadApp();
  // }, []);

  // const handleUserResponse = (userData: any) => {
  //   dispatch({ type: reducerCases.SET_USER, user: userData });
  // };

  if (!accessToken && location.search) {
    const code = getAuthorizationCode(location.search);
    const { data, isLoading, isFetching } = useHandleAccessAuthorization(code);
  }

  // const callMeFunction = async () => {
  //   const options = {
  //     headers: {
  //       Authorization: 'Bearer ' + accessToken + '3'
  //     }
  //   };

  //   const { data } = await axios.get('https://api.spotify.com/v1/me', options);

  //   return data;
  // };

  // const handleQuery = () => {
  //   const query: any = useQuery({
  //     queryKey: ['me'],
  //     queryFn: callMeFunction,
  //     retry: false,
  //     refetchOnWindowFocus: false
  //   });

  //   if (query?.failureReason?.request?.status === 401) {
  //     alert('Your token has expired. Please login again.');
  //   }
  //   return query;
  // };

  // const { data, isError, isPending, fetchStatus } = handleQuery();

  return (
    <>
      {accessToken ? (
        <div className='bg-black'>
          <NavBar />
          <div className=''>
            <SideBar />
            <Outlet />
          </div>
        </div>
      ) : (
        <LoginPage spotifyUrl={spotifyLoginLink} />
      )}
    </>
  );
};

export default App;
