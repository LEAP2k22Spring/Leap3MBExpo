import { NavigationContainer } from "@react-navigation/native";
import { MainContextProvider } from "./src/context/SplashContext";
import MyStack from "./src/navigator/Stack";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    // <MainContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    // {/* </MainContextProvider> */}
  );
}
