import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "@react-native-material/core";
import { useAuth } from "../context/AuthContext";
const ProfileScreen = ({ navigation }) => {
  const {logOut} = useAuth();
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={styles.animationContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.headerLogo}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={{ flex: 3, justifyContent:'center', alignItems:'center' }}>
          <Avatar label="Mbold Ganbat" autocolor size={72} />
          <Text style={styles.textStyle}>99009900</Text>
        </View>
        <View style={{ flex: 5, alignItems:'center' }}>
          <TouchableOpacity style={[styles.logoutButton]} onPress={logOut}>
            <Ionicons style={{margin:10}} name="ios-exit-outline" size={24} color="red" />
            <Text style={{fontSize:20, fontWeight:'500'}}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#3333",
  },
  headerLogo: {
    width: "100%",
    height: 30,
    resizeMode: "contain",
  },
  textStyle:{
    fontSize:25,
    fontWeight:'500',
    marginTop:10
  },
  logoutButton:{
    width:'90%',
    height: 60,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#3333',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }

});
export default ProfileScreen;
