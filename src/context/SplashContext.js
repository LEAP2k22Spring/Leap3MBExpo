import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";
import SplashScreen from "../component/SplashScreen";

const MainContext = createContext();
export const MainContextProvider =({children})=>{
    const [isSplash, setisSplash] = useState('');
    const {getItem, setItem} = useAsyncStorage("splash_key");
    setItem("true")
    return(
        <MainContextProvider value={{isSplash}}>
            {isSplash ? children : <SplashScreen/>}
        </MainContextProvider>
    )
}
export const useMainContext = () => useContext(MainContext)