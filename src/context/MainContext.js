import React, { useContext, useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const info = {
    username: "Jancer",
    channel: "Quebrando Paradigmas",
  };

  const increaseCounter = (number) => {
    setCounter((value) => value + number);
  };

  const decreaseCounter = (number) => {
    setCounter((value) => value - number);
  };

  return (
    <MainContext.Provider
      value={{ counter, info, increaseCounter, decreaseCounter }}
    >
      {children}
    </MainContext.Provider>
  );
};

// export const useMainContext = () => useContext(MainContext);
