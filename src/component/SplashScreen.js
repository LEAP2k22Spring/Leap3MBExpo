import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

// const animation = useRef(null);
const SplashScreen = () => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        // ref={animation}
        loop
        style={{
          width: 200,
          height: 200,
        //   backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/splash.json")}
      />
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
