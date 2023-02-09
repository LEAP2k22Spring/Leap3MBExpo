import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import PictureScreen from "../screens/Picture";
import RegisterScreen from "../screens/Register";
import BottomTabNavigator from "./Bottom";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyStack = () => {
  return (
    // <Drawer.Navigator>
    //     <Drawer.Screen name='Header' component={BottomTabNavigator} options={{
    //     }}/>
    //     <Drawer.Screen name='Detail' component={DetailScreen}/>
    // </Drawer.Navigator>
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Bottom"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerBackTitle: "Back to Home",
          headerBackTitleStyle: {
            fontSize: 15,
          },
        }}
      /> */}
    </Stack.Navigator>

  );
};
export default MyStack;
