import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { BagScreen } from "../screens/BagScreen";
import { ItemScreen } from "../screens/Item";
import LoginScreen from "../screens/Login";
import OTPScreen from "../screens/OTP";
import { PaymentScreen } from "../screens/PaymentScreen";
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

      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="BagScreen"
        component={BagScreen}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
