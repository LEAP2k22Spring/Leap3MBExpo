import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import SplashScreen from "../component/SplashScreen";

const SplashContext = createContext();

export const SplashProvider = ({ children }) => {
  const [isSplash, setIsSplash] = useState("");
  const {getItem, setItem} = useAsyncStorage("splash_key");

  const getItemData = async () =>{
    console.log("starting");
    const value = getItem();
    setIsSplash(value)
  }
  const setItemData = async () =>{
    await setItem("true")
  }
  useEffect(()=>{
    setItemData();
    const myTimeout = setTimeout(getItemData, 3000);
  },[])
  return (
    <SplashContext.Provider
      value={{
      }}
    >
      {isSplash ? children : <SplashScreen/>}
    </SplashContext.Provider>
  );
};

export const useSplashContext = () => useContext(SplashContext);