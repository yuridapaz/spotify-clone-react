/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children, initialState, reducer }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useStateProvider = () => useContext(StateContext);
