import './index.css';

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reducer, { initialState } from './reducer/reducer.js';

import App from './App.jsx';
import MainPage from './pages/Main/index.js';
import PlaylistPage from './pages/Playlist/index.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StateProvider from './context/contextProvider.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StateProvider>
);
