import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useState } from "react";
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
  const [cup, setCup] = useState(0);
  const [shotCount, setShotCount] = useState(1);
  const [milkStatus, setMilkStatus] = useState("Standard");

  const milkData = [
    { title: "Standart" },
    { title: "Almond" },
    { title: "Breve" },
    { title: "Coconut" },
  ];
  const foamData = [
    { title: "Small" },
    { title: "Medium" },
    { title: "Large" },
    { title: "Extra foam" },
  ];
  const cupsDatas = [
    { title: "Small", img: require("../../assets/icons/8oz.png"), size: 8 },
    { title: "Sprunce", img: require("../../assets/icons/12oz.png"), size: 12 },
    { title: "Ceder", img: require("../../assets/icons/16oz.png"), size: 16 },
    { title: "Redwood", img: require("../../assets/icons/20oz.png"), size: 20 },
    { title: "Giant", img: require("../../assets/icons/24oz.png"), size: 24 },
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
          <View>
            <Text style={{ fontSize: 20, fontWeight: "400", margin: 20 }}>
              Size options
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 150,
              flexDirection: "row",
            }}
          >
            {cupsDatas?.map((el, index) => (
              <Fragment key={index}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    style={
                      cup === index ? styles.cupSelected : styles.cupUnSelected
                    }
                    onPress={() => setCup(index)}
                  >
                    <Image
                      style={[{ flex: 1, resizeMode: "contain" }]}
                      source={el.img}
                    />
                  </Pressable>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{el.title}</Text>
                  </View>
                </View>
              </Fragment>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text>Flavor changes</Text>
          </View>
          <ScrollView>
            <View style={styles.inputStyle}>
              <Text style={styles.inputText}>Milk</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "90%",
                  height: 50,
                  borderWidth: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#3333",
                  marginTop: 10,
                }}
                onPress={() => setShow(true)}
              >
                <Text style={{ marginLeft: 20 }}>{milkStatus}</Text>
                <Ionicons
                  style={{ marginRight: 20 }}
                  name="chevron-down"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputStyle}>
              <Text style={styles.inputText}>Shot</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "90%",
                  height: 50,
                  borderWidth: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#3333",
                  marginTop: 10,
                }}
              >
                <Text style={{ marginLeft: 20 }}>
                  {shotCount} {shotCount <= 1 ? "shot" : "shots"}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 20,
                    justifyContent: "space-between",
                    width: "30%",
                  }}
                >
                  <Ionicons
                    name="remove-outline"
                    size={27}
                    color="black"
                    onPress={() => setShotCount(shotCount - 1)}
                  />
                  <Text>{shotCount}</Text>
                  <Ionicons
                    name="add"
                    size={27}
                    color="black"
                    onPress={() => setShotCount(shotCount + 1)}
                  />
                </View>
              </View>
            </View>
            <View style={styles.inputStyle}>
              <Text style={styles.inputText}>Foam</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "90%",
                  height: 50,
                  borderWidth: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#3333",
                  marginTop: 10,
                }}
                onPress={() => setShow(true)}
              >
                <Text style={{ marginLeft: 20 }}>Standart</Text>
                <Ionicons
                  style={{ marginRight: 20 }}
                  name="chevron-down"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputStyle}>
              <Text style={styles.inputText}>Whipping Cream</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "90%",
                  height: 50,
                  borderWidth: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#3333",
                  marginTop: 10,
                }}
                onPress={() => setShow(true)}
              >
                <Text style={{ marginLeft: 20 }}>Standart</Text>
                <Ionicons
                  style={{ marginRight: 20 }}
                  name="chevron-down"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputStyle}>
              <Text>Milk</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "90%",
                  height: 50,
                  borderWidth: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 10,
                  borderColor: "#3333",
                  marginTop: 10,
                }}
                onPress={() => setShow(true)}
              >
                <Text style={{ marginLeft: 20 }}>Standart</Text>
                <Ionicons
                  style={{ marginRight: 20 }}
                  name="chevron-down"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              {/* <BottomSheet
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
              </BottomSheet> */}
            </View>
          </ScrollView>
          <BottomSheet
            show={show}
            onDismiss={() => {
              setShow(false);
            }}
            enableBackdropDismiss
          >
            <ScrollView contentContainerStyle={{ padding: 16 }}>
              {milkData.map((el, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    height: 70,
                    borderBottomWidth: 1,
                    borderColor: "#969495",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMilkStatus(el.title), setShow(false);
                  }}
                >
                  <Text key={index}>{el.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </BottomSheet>
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
  cupSelected: {
    flex: 2,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6ebda",
    borderWidth: 0,
    borderColor: "orange",
    // borderEndWidth:3
  },
  cupUnSelected: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  inputText: {
    color: "#969495",
  },
});
