import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import BottomTabNavigator from "./Bottom";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerBackTitle: "Back to Home",
          headerBackTitleStyle: {
            fontSize: 15,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
