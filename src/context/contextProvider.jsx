/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children, initialState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const accessToken = localStorage.getItem('spotify_access_token');

  return <StateContext.Provider value={{ state, dispatch, accessToken }}>{children}</StateContext.Provider>;
};

export default StateProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useStateProvider = () => useContext(StateContext);
