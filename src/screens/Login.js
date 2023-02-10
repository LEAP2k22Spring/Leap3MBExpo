import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useCollection } from "../../firebase/firebase";
import LoadingComp from "../component/LoadingComp";

const LoginScreen = ({ navigation }) => {
  const { getData } = useCollection();
  return (
    <View style={styles.animationContainer}>
        <Text style={styles.ConfirmCode}>Confirmation code</Text>
      <TextInput style={styles.textInput} keyboardType={"phone-pad"} />
      <Button title="click me" onPress={() => getData()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 5,
  },
  ConfirmCode:{
    fontSize:20,
    padding:10
  }
});
export default LoginScreen;
