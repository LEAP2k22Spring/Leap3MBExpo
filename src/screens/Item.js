import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Provider } from "react-native-paper";
import BottomSheet from "../component/BottomSheet";
import { useAddBag } from "../context/AddBagContext";

export const ItemScreen = ({ route, navigation }) => {
  const { addToBag, setAddToBag } = useAddBag();
  const { imageUrl, price } = route.params;
  const [show, setShow] = useState(0);
  const [totalAddToBag, setTotalAddToBag] = useState({});
  const [cup, setCup] = useState(0);
  const [shotCount, setShotCount] = useState(1);
  const [cupSize, setCupSize] = useState(8);
  const [milkStatus, setMilkStatus] = useState("Standard");
  const [foamStatus, setFoamStatus] = useState("Meduim");
  const [creamStatus, setCreamStatus] = useState("No whip");

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
  const creamData = [{ title: "No whip" }, { title: "Whip" }];
  const cupsDatas = [
    { title: "Small", img: require("../../assets/icons/8oz.png"), size: 8 },
    { title: "Sprunce", img: require("../../assets/icons/12oz.png"), size: 12 },
    { title: "Ceder", img: require("../../assets/icons/16oz.png"), size: 16 },
    { title: "Redwood", img: require("../../assets/icons/20oz.png"), size: 20 },
    { title: "Giant", img: require("../../assets/icons/24oz.png"), size: 24 },
  ];
  useEffect(() => {
    setTotalAddToBag({
      size: cupSize,
      milk: milkStatus,
      shot: shotCount,
      foam: foamStatus,
      cream: creamStatus,
      img: imageUrl,
      itemPrice:price
    });
  }, [cupSize, milkStatus, shotCount, foamStatus, creamStatus, imageUrl]);

  const AddToBagFun = () => {
    setAddToBag([...addToBag, totalAddToBag]);
  };
  const navigator = useNavigation();

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
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF33",
                borderRadius: 50,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back-sharp" size={40} color="#FFF" />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF33",
                  borderRadius: 50,
                }}
                onPress={() => navigator.navigate("BagScreen")}
              >
                <Ionicons name="basket-outline" size={40} color="#FFF" />
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  backgroundColor: "#D3A762",
                  marginTop: -5,
                }}
              >
                <Text style={{ color: "#FFFF" }}>{addToBag.length}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 2, marginBottom: 60 }}>
          <ScrollView>
            <View
              style={{
                height: 60,
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,
                justifyContent: "center",
                borderColor: "#D3A762",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
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
                      marginTop: 20,
                    }}
                  >
                    <Pressable
                      style={
                        cup === index
                          ? styles.cupSelected
                          : styles.cupUnSelected
                      }
                      onPress={() => {
                        setCup(index, setCupSize(el.size));
                      }}
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
            <View
              style={{
                height: 60,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Flavor changes
              </Text>
            </View>
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
                onPress={() => setShow(1)}
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
                onPress={() => setShow(2)}
              >
                <Text style={{ marginLeft: 20 }}>{foamStatus}</Text>
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
                onPress={() => {
                  setShow(3);
                }}
              >
                <Text style={{ marginLeft: 20 }}>{creamStatus}</Text>
                <Ionicons
                  style={{ marginRight: 20 }}
                  name="chevron-down"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View
            style={{
              height: 70,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={[styles.loginButton, styles.centerView]}
              onPress={() => {
                AddToBagFun();
              }}
            >
              <Text style={{ color: "FF" }}>Add To Bag</Text>
            </Pressable>
          </View>
          <BottomSheet
            show={show}
            onDismiss={() => {
              setShow(0);
            }}
            enableBackdropDismiss
          >
            <ScrollView contentContainerStyle={{ padding: 16 }}>
              {show === 1
                ? milkData.map((el, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        height: 70,
                        borderBottomWidth: 1,
                        borderColor: "#969495",
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        setMilkStatus(el.title), setShow(0);
                      }}
                    >
                      <Text key={index}>{el.title}</Text>
                    </TouchableOpacity>
                  ))
                : show === 2
                ? foamData.map((el, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        height: 70,
                        borderBottomWidth: 1,
                        borderColor: "#969495",
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        setFoamStatus(el.title), setShow(0);
                      }}
                    >
                      <Text key={index}>{el.title}</Text>
                    </TouchableOpacity>
                  ))
                : creamData.map((el, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        height: 70,
                        borderBottomWidth: 1,
                        borderColor: "#969495",
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        setCreamStatus(el.title), setShow(0);
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
  },
  inputText: {
    color: "#969495",
  },
  loginButton: {
    width: "90%",
    height: 60,
    backgroundColor: "#D3A762",
    borderRadius: 5,
  },
  centerView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
