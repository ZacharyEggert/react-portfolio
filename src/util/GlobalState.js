import React, { createContext, useReducer, useContext } from "react";
import data from '../data.json'

const GlobalContext = createContext();
const { Provider } = GlobalContext;


const initialState = {
  ...data
}

const reducer = (state, action) => {
  //** REDUCER FOR USEREDUCER */

};

const GlobalProvider = ({...props }) => {
  const [state, dispatch] = useReducer(reducer, {...initialState});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };