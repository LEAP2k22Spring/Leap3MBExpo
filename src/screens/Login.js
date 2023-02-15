import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { useCollection } from "../../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { signInWithPhoneNumber, handleChangePhoneNumber, user } = useAuth();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.animationContainer}
      >
        <TouchableNativeFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.animationContainer}>
            <View style={[styles.centerView, styles.margin]}>
              <Ionicons
                name="phone-portrait-outline"
                size={35}
                color="orange"
              />
              <Text style={[styles.sectionContainerText1, styles.margin]}>
                Enter your mobile number
              </Text>
              <Text style={styles.sectionContainerText2}>
                We will send confirmation code
              </Text>
            </View>
            <View style={styles.phoneInput}>
              <Text style={styles.textStyle}>+976</Text>
              <TextInput
                style={[styles.textInput, { margin: 20 }]}
                keyboardType={"phone-pad"}
                onChangeText={handleChangePhoneNumber}
              />
            </View>
            <View style={styles.loginButtonView}>
              {/* <Button title="click me" onPress={() => getData()}></Button> */}
              <Pressable
                style={[styles.loginButton, styles.centerView]}
                onPress={async () => {
                  // console.log(phoneNumber)
                  await signInWithPhoneNumber();
                  navigation.navigate("OTP");
                }}
              >
                <Text>Enter</Text>
              </Pressable>
            </View>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centerView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: 90,
    width: "100%",
  },
  textInput: {
    width: 160,
    height: 40,
    padding: 5,
    fontSize: 30,
  },
  ConfirmCode: {
    fontSize: 20,
    padding: 10,
  },
  sectionContainerText1: {
    fontSize: 25,
    width: 180,
    textAlign: "center",
  },
  sectionContainerText2: {
    fontSize: 14,
    textAlign: "center",
    color: "#6666",
  },
  margin: {
    margin: 10,
  },
  phoneInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  textStyle: {
    fontSize: 30,
    color: "#6666",
  },
  loginButtonView: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    margin: 10,
  },
  loginButton: {
    width: "90%",
    height: 40,
    backgroundColor: "#D3A762",
    borderRadius: 5,
  },
});
export default LoginScreen;
