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
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import firestore from "@react-native-firebase/firestore";

const OTPScreen = ({ navigation }) => {
  const { phoneNumber, handleChangeConfirmationCode, confirmCode } = useAuth();
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
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => navigation.navigate("Login")}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={[styles.centerView, styles.margin, { marginTop: 90 }]}>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={35}
                color="orange"
              />
              <Text style={[styles.sectionContainerText1, styles.margin]}>
                Enter code sent to your phone
              </Text>
              <Text style={styles.sectionContainerText2}>
                We send it to the number {`+976${phoneNumber}`}
              </Text>
            </View>
            <View style={styles.codeInput}>
              <TextInput
                style={[styles.textInput, { margin: 5 }]}
                keyboardType={"number-pad"}
                onChangeText={handleChangeConfirmationCode}
              />
            </View>
            <View style={styles.loginButtonView}>
              <Pressable
                style={[styles.loginButton, styles.centerView]}
                onPress={async () => {
                  try {
                    const isConfirmed = await confirmCode();
                    if (isConfirmed?.additionalUserInfo?.isNewuser) {
                      await firestore()
                        .collection("users")
                        .doc(isConfirmed?.user?.uid)
                        .set({
                          phoneNumber: isConfirmed?.user?.phoneNumber,
                        });
                    }else {
                      navigation.navigate("Profile")
                      console.log("bna");
                    }
                  } catch (error) {
                    console.log(error);
                  }
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
    // justifyContent:'center',
    flex: 1,
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
  codeInput: {
    margin: 5,
    borderWidth: 1,
    width: "50%",
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
export default OTPScreen;
