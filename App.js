import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/context/AuthContext";
import { SplashProvider } from "./src/context/SplashContext";
import MyStack from "./src/navigator/Stack";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <SplashProvider>
          <MyStack />
        </SplashProvider>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
