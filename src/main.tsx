import './index.css';

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './reducer/reducer.js';

import App from './App.jsx';
import MainPage from './pages/Main/index.js';
import PlaylistPage from './pages/Playlist/index.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StateProvider from './context/contextProvider.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <MainPage />
        },
        { path: '/playlist/:playlistID', element: <PlaylistPage /> }
      ]
    }
  ]
  // { basename: '/' }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <RouterProvider router={router} />
  </StateProvider>
  // </React.StrictMode>
);
