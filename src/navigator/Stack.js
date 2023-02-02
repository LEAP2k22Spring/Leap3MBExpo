import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import PictureScreen from "../screens/Picture";
import BottomTabNavigator from "./Bottom";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    // <Drawer.Navigator>
    //     <Drawer.Screen name='Home' component={BottomTabNavigator}/>
    // </Drawer.Navigator>
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
