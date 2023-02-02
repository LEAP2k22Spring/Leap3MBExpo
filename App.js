import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import ContactScreen from "./src/screens/Contact";
import MyStack from "./src/navigator/Stack";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home"> */}
        <MyStack />
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
