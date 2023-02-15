import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Provider } from "react-native-paper";
import BottomSheet from "../component/BottomSheet";

export const ItemScreen = ({ route, navigation }) => {
  const { imageUrl } = route.params;
  const [selectedValue, setSelectedValue] = useState("java");
  const [show, setShow] = useState(false);
  const data = [
    { title: "Standart" },
    { title: "Almond" },
    { title: "Breve" },
    { title: "Coconut" },
  ];
  // const navigator = useNavigation();
  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <View style={styles.itemImage}>
          <Image
            style={{ width: "50%", height: "80%", borderRadius: 10 }}
            source={{ uri: imageUrl }}
          />
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "90%",
              height: "80%",
              justifyContent: "space-between",
              margin: 20,
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Bottom")}>
              <Ionicons
                name="chevron-back-circle-outline"
                size={40}
                color="#FFF"
              />
            </TouchableOpacity>
            <Ionicons name="add-circle-outline" size={40} color="#FFF" />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <ScrollView>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "400", margin: 20, }}>
                Size options
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    marginBottom: 20,
                  }}
                  source={require("../../assets/icons/small.png")}
                />
                <Text>Small</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    marginBottom: 20,
                  }}
                  source={require("../../assets/icons/sprunce.png")}
                />
                <Text>Sprunce</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    marginBottom: 20,
                  }}
                  source={require("../../assets/icons/ceder.png")}
                />
                <Text>Ceder</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    marginBottom: 20,
                  }}
                  source={require("../../assets/icons/redwood.png")}
                />
                <Text>Redwood</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    marginBottom: 20,
                  }}
                  source={require("../../assets/icons/giant.png")}
                />
                <Text>Giant</Text>
              </View>
            </View>
            <View style={{ flex: 5 }}>
              <Text>Flavor changes</Text>
            </View>
            <View style={{ flex: 5, alignItems: "center" }}>
              <Text>milk</Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "55%",
                  // height: 50,
                  borderWidth: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#3333",
                }}
                onPress={() => setShow(true)}
              >
                <Text style={{ marginLeft: 20 }}>Standart</Text>
                <Ionicons name="chevron-down" size={24} color="black" />
              </TouchableOpacity>
              <BottomSheet
                show={show}
                onDismiss={() => {
                  setShow(false);
                }}
                enableBackdropDismiss
              >
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                  {data.map((el, index) => (
                    <Text key={index}>{el.title}</Text>
                  ))}
                </ScrollView>
              </BottomSheet>
            </View>
          </ScrollView>
        </View>
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  itemImage: {
    flex: 1,
    backgroundColor: "#1E3932",
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
