import { Button, Text, View } from "react-native"

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>MBssss</Text>
            <Button title="click me" onPress={() => navigation.navigate("Detail")}></Button>
        </View>
    )
}
export default HomeScreen;