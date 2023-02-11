import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import LoginScreen from "../screens/Login";
import OTPScreen from "../screens/OTP";
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
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => navigation.navigate("Login")}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          headerShown: false,
        })}
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
