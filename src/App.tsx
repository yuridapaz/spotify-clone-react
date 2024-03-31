import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { reducerCases, spotifyLoginLink } from './utils/constants';
import { useEffect, useRef, useState } from 'react';

import { Buffer } from 'node:buffer';
import LoginPage from './pages/Login';
import NavBar from './components/Navbar';
import SideBar from './components/SideBar';
import axios from 'axios';
import { formatHashToken } from './utils/function';
import { useStateProvider } from './utils/contextProvider';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [{ token }, dispatch] = useStateProvider();

  const spotifyLoginLink = `${import.meta.env.VITE_SPOTIFY_API_AUTHORIZE_URL}?client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI}&scope=${import.meta.env.VITE_SPOTIFY_API_SCOPE}&response_type=code&show_dialog=true`;

  // const getCode = () => {
  //   const queryString = location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const code = urlParams.get('code');
  //   fetchAccessToken(code!);
  // };

  // const fetchAccessToken = (code: string) => {
  //   // const body = `grant_type=authorization_code&code=${code}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URL}&client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&client_secret=${import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET}`;
  //   // callAuthorizeAPI(body);
  // };

  // const callAuthorizeAPI = async (body: any) => {
  //   console.log(import.meta.env.VITE_SPOTIFY_API_TOKEN_URL + body);
  //   const res = await axios.post(import.meta.env.VITE_SPOTIFY_API_TOKEN_URL + body, {
  //     headers: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       Authorization:
  //         'Basic ' +
  //         Buffer.from(
  //           import.meta.env.VITE_SPOTIFY_API_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET
  //         ).toString('base64')
  //     }
  //   });
  // };

  const allInOneFunction = async () => {
    //  Part I
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');

    //  Part II
    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI}&client_id=${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}&client_secret=${import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET}`;

    //  Part III
    // let xhr = new XMLHttpRequest();
    // xhr.open('POST', import.meta.env.VITE_SPOTIFY_API_TOKEN_URL, true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader(
    //   'Authorization',
    //   'Basic ' + btoa(import.meta.env.VITE_SPOTIFY_API_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET)
    // );
    // xhr.send(body);
    // xhr.onload = handleAuthorizationResponse;

    const postData = {
      code: code,
      redirect_uri: import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI,
      grant_type: 'authorization_code'
    };

    await axios
      .post(import.meta.env.VITE_SPOTIFY_API_TOKEN_URL, postData, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(import.meta.env.VITE_SPOTIFY_API_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET)
        }
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

    // function handleAuthorizationResponse(this: any) {
    //   if (this.status == 200) {
    //     var data = JSON.parse(this.responseText);
    //     console.log(data);
    //     var data = JSON.parse(this.responseText);
    //   } else {
    //   }
    // }
  };
  allInOneFunction();

  useEffect(() => {
    sessionStorage.clear();

    const getUserInfo = async (token: any) => {
      let options = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
      const { data } = await axios.get('https://api.spotify.com/v1/me', options);
      dispatch({
        type: reducerCases.SET_USER,
        user: data
      });
    };

    if (!sessionStorage.getItem('session_token') && location.hash) {
      const token = formatHashToken(location.hash);
      dispatch({
        type: reducerCases.SET_TOKEN,
        token
      });
      sessionStorage.setItem('session_token', token);
      getUserInfo(sessionStorage.getItem('session_token'));
    }
  }, [token, dispatch]);

  // REVIEW:
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const scrollDemoRef = useRef(null);
  // const handleScroll = () => {
  //   if (scrollDemoRef.current) {
  //     const { scrollTop } = scrollDemoRef.current;
  //     setScrollPosition(scrollTop);
  //   }
  // };
  // scrollTop 150/155
  // REVIEW: END

  return (
    <>
      {/* {token ? (
        <div className='flex h-screen w-full max-w-full flex-col overflow-hidden bg-slate-300 text-white'>
          <div className=' flex h-[calc(100%-8rem)] w-full'>
            <SideBar />
            <div
              className='relative flex  w-full flex-col overflow-auto bg-secondary-2'
              id='scrollDemo'
              // ref={scrollDemoRef}
              // onScroll={handleScroll}
            >
              <div className='absolute left-0 right-0 z-0 h-60 bg-gradient-to-b from-indigo-500/50' />
              <NavBar />
              <Outlet />
            </div>
          </div>
          <div className='flex h-32 w-full overflow-auto border-t border-t-neutral-3 bg-secondary-2'>Footer</div>
        </div>
      ) : ( */}
      <LoginPage spotifyUrl={spotifyLoginLink} />
      {/* )} */}
    </>
  );
};

export default App;
