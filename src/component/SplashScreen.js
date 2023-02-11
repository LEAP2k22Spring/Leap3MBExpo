import React from "react";
import { Image, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
  return (
    <View style={styles.animationContainer}>
      {/* <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../assets/splash.json")}
      /> */}
      <Image style={{width:'100%', height:'100%'}} source={require('../../assets/splash.png')} />
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
  buttonContainer: {
    paddingTop: 20,
  },
});
export default SplashScreen;
