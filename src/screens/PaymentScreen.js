import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CardAddModal } from "../modal/CardAddModal";
import { PaymentModal } from "../modal/PaymentModal";

export const PaymentScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewCard, setIsNewCard] = useState(false)
  return (
    <SafeAreaView
      style={[{ height: "100%" }, isOpen || isNewCard ? { opacity: 0.4 } : { opacity: 1 }]}
    >
      <View style={[styles.headerTag, styles.centerView]}>
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
        <Text style={{ fontSize: 24 }}>Payment</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ width: "100%", height: 40, justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 20 }}>
              Credit card
            </Text>
          </View>
          <Pressable style={styles.cardItem} onPress={() => setIsOpen(true)}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <Image
                style={{ height: 20, resizeMode: "contain" }}
                source={require("../../assets/visa.png")}
              />
            </View>
            <View style={[{ flex: 1, justifyContent: "center" }]}>
              <Text style={{ fontWeight: "500" }}>Credit card</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 11, marginRight: 20 }}>Visa</Text>
                <Text style={{ fontSize: 11 }}>****** 3306</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-end",
                marginRight: 20,
              }}
            >
              <Ionicons name="chevron-forward" size={20} color="black" />
            </View>
          </Pressable>
          <View></View>
          <TouchableOpacity style={[styles.cardButton, styles.centerView]} onPress={()=>setIsNewCard(true)}>
            <Text style={{ color: "#D3A762", fontSize: 17 }}>Add new card</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ height: 40, width: "100%", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 20 }}>
              Other methods
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.cardItem}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <Image
                  style={{ height: 40, resizeMode: "contain" }}
                  source={require("../../assets/cash.png")}
                />
              </View>
              <View style={[{ flex: 2, justifyContent: "center" }]}>
                <Text style={{ fontWeight: "500" }}>Cash</Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Text style={{ fontSize: 11 }}>
                    Pay at store when pick-up
                  </Text>
                  {/* <Text style={{ fontSize: 11 }}>****** 3306</Text> */}
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 20,
                }}
              >
                <Ionicons name="chevron-forward" size={20} color="black" />
              </View>
            </View>
          </View>
          <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <CardAddModal isNewCard={isNewCard} setIsNewCard={setIsNewCard}/>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerTag: {
    height: 70,
    borderBottomWidth: 1,
    borderColor: "#EAEAEA",
    position: "relative",
    flexDirection: "row",
  },
  cardItem: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EAEAEA",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },
  cardButton: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D3A762",
  },
  centerView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
