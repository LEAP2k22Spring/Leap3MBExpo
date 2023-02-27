import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAddBag } from "../context/AddBagContext";
import { useAuth } from "../context/AuthContext";

export const BagScreen = ({ navigation }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToBag, setAddToBag } = useAddBag();
  const {user} = useAuth();
  const minusFun = (el) => {
    const minusToBag = addToBag?.filter((ele, index) => el !== index);
    setAddToBag([...minusToBag]);
  };
  const subTotalPrice = addToBag.reduce((acc, el)=>acc + el.itemPrice*el.shot, 0)
  const taxFee = ((subTotalPrice*0.1)).toFixed(2)
  const totalPrice = (subTotalPrice+parseFloat(taxFee)).toFixed(2)
  const navigator = useNavigation()
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.headerTag}>
        <View
          style={{
            position: "absolute",
            width: "90%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={32} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 24 }}>My bag</Text>
      </View>
      <View style={styles.orderItems}>
        <ScrollView>
          <View>
            <Text style={styles.itemText}>
              Order items {`(${addToBag.length})`}{" "}
            </Text>
          </View>
          {addToBag.map((el, index) => (
            <View key={index} style={styles.orderItem}>
              
              <Image
                style={styles.itemImg}
                source={{
                  uri: el.img,
                }}
              />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text style={styles.itemText}>Hot Chocolate</Text>
                <Text style={{ marginTop: 5, color: "#333" }}>
                  {/* $3.12 / spruce */}
                  {`$${el.itemPrice} / spruce`}
                </Text>
                <Text style={{ marginTop: 10, color: "#333" }}>
                  {`+ ${el.milk}`}
                </Text>
                <Text style={{ marginTop: 5, color: "#333" }}>
                  {`+ ${el.shot} ${el.shot <= 1 ? "shot" : "shots"}`}
                </Text>
                <Text style={{ marginTop: 5, color: "#333" }}>
                  {`+ ${el.foam}`}
                </Text>
                <Text style={{ marginTop: 5, color: "#333" }}>
                  {`+ ${el.cream}`}
                </Text>
              </View>
              <TouchableOpacity onPress={() => minusFun(index)}>
                <Ionicons
                  style={{ margin: 10 }}
                  name="close-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          ))}

          <View style={{ marginTop: 10 }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text>Subtotal</Text>
              <Text>{`$${subTotalPrice}`}</Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text>Tax & Fees</Text>
              <Text>{`$${taxFee}`}</Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 18 }}>Total</Text>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>{`$${totalPrice}`}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
            user ? navigator.navigate("PaymentScreen") : navigator.navigate("Login")
          }}
        >
          <Text style={{ color: "#FFF" }}>{`Check Out $${totalPrice}`}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTag: {
    height: 70,
    borderBottomWidth: 1,
    borderColor: "#EAEAEA",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexDirection: "row",
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
  orderItems: {
    flex: 1,
    margin: 20,
  },
  orderItem: {
    width: "100%",
    height: 140,
    borderBottomWidth: 1,
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#EAEAEA",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
  },
  itemImg: {
    width: 100,
    borderRadius: 10,
  },
});
