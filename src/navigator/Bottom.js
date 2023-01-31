import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ContactScreen from '../screens/Contact';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Contact' component={ContactScreen} />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;
