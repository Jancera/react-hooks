import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();

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

  const navigateUser = () => {
    navigation.navigate("Settings");
  };

  return (
    <MainContext.Provider
      value={{
        counter,
        info,
        navigateUser,
        increaseCounter,
        decreaseCounter,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
