import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LoadingComp from "../component/LoadingComp";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.animationContainer}>
      <Button
        title="click me"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
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
});
export default HomeScreen;
