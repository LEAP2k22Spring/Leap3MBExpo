import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GestureScreen = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#3333" }}>
      <View
        style={{
          height: 550,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 300, width: "90%", borderRadius: 20 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg",
          }}
        />
      </View>
      {isTrue ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Ionicons name="reload-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Ionicons name="add-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cloud-upload-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              height: 60,
              width: "90%",
              borderWidth: 2,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <Text>Choose Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 60,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setIsTrue(true)}
          >
            <Text>Use this photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default GestureScreen;
