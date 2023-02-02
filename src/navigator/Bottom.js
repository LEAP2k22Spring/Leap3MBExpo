import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ContactScreen from "../screens/Contact";
import { Ionicons } from "@expo/vector-icons";
import HeaderRigth from "../component/HeaderRigth";
import PictureScreen from "../screens/Picture";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //   tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerRight: ({ color, size }) => (
            <Ionicons
              name="ios-information-circle"
              color={"tomato"}
              size={"30"}
              onPress={() => alert("Error")}
            />
          ),
          headerLeft: ({ color, size }) => (
            <Ionicons
              name="ios-information-circle-outline"
              color={"tomato"}
              size={"30"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          //   tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Picture"
        component={PictureScreen}
        options={{
          //   tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
