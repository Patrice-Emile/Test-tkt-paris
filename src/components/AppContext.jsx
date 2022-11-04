import { createContext, useState, useEffect } from "react";
import axios from "axios";

console.clear();
const AppContext = createContext({});

export const AppContextProvider = (props) => {
  // GET DATA
  const getDataAPI = async (options) => {
    const { url, params } = options;
    return await axios
      .get(url, {
        params,
      })
      .then((res) => res.data);
  };

  return (
    <AppContext.Provider
      {...props}
      value={{
        getDataAPI,
      }}
    />
  );
};

export default AppContext;
