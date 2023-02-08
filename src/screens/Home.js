import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useCollection } from "../../firebase/firebase";
import LoadingComp from "../component/LoadingComp";

const HomeScreen = ({ navigation }) => {
  const {getData} = useCollection()
  return (
    <View style={styles.animationContainer}>
      <Button
        title="click me"
        onPress={() => getData()}
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
