import { NavigationContainer } from "@react-navigation/native";
import { SplashProvider } from "./src/context/SplashContext";
import MyStack from "./src/navigator/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <SplashProvider>
        <MyStack />
      </SplashProvider>
    </NavigationContainer>
  );
}
