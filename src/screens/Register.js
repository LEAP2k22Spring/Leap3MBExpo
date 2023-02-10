import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTabNavigator from "../navigator/Bottom";
import analytics from '@react-native-firebase/analytics';
const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ margin: 20 }}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Ionicons name="phone-portrait-outline" size={24} color="black" />
        <Text style={styles.sectionContainerText1}>Enter your mobile number</Text>
        <Text style={styles.sectionContainerText2}>We will send confirmation code</Text>
      </View>
      <View style={styles.sectionPhoneNumber}>
        <Text>+976</Text>
        <TextInput style={styles.textInput} keyboardType={'phone-pad'}/>
      </View>
      <View style={styles.animationContainer}>
        <Button title="click me" onPress={() => navigation.navigate('Login')}></Button>
        <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    // flex:1,
    backgroundColor: "#fff",
    alignItems:'flex-end',
    justifyContent:'center',
    // flex: 1,
  },
  sectionContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // height:50
  },
  sectionPhoneNumber:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
  },
  sectionContainerText1:{
    fontSize:25,
    width:180,
    textAlign:'center'
  },
  sectionContainerText2:{
    fontSize:10,
    textAlign:'center',
    color:'#6666'
  },
  textInput:{
    width:200,
    height:40,
    borderWidth:1,
    padding:5
  }
});
export default RegisterScreen;
