import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import BottomTabNavigator from "./Bottom";


const Stack = createStackNavigator()
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Bottom' component={BottomTabNavigator} />
            <Stack.Screen name='Detail' component={DetailScreen} />
        </Stack.Navigator>
    )
}
export default MyStack;