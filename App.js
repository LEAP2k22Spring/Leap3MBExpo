import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigator/Stack";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}
