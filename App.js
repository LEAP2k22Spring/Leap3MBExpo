import { NavigationContainer } from "@react-navigation/native";
import { AddBagContextProvider } from "./src/context/AddBagContext";
import { AuthContextProvider } from "./src/context/AuthContext";
import { SplashProvider } from "./src/context/SplashContext";
import MyStack from "./src/navigator/Stack";

export default function App() {
  return (
    <AuthContextProvider>
      <AddBagContextProvider>
        <NavigationContainer>
          <SplashProvider>
            <MyStack />
          </SplashProvider>
        </NavigationContainer>
      </AddBagContextProvider>
    </AuthContextProvider>
  );
}
