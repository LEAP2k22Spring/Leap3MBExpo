import { Ionicons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const CardAddModal = ({ isNewCard, setIsNewCard }) => {
  return (
      <Modal animationType="slide" transparent={true} visible={isNewCard}>
          <View
            style={{
              width: "100%",
              height: "70%",
              backgroundColor: "#FFF",
              top: 300,
              alignItems: "center",
            }}
          >
            <ScrollView style={styles.scrollView}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderColor: "#EAEAEA",
                  height: 50,
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginLeft: 20, fontSize: 16, fontWeight: "600" }}
                >
                  Add new card
                </Text>
                <TouchableOpacity onPress={() => setIsNewCard(!isNewCard)}>
                  <Ionicons
                    style={{ margin: 10 }}
                    name="close-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 60,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#EAEAEA",
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={{ marginLeft: 20, color: "#666" }}>
                  Cardholder name
                </Text>
                <TextInput style={{ marginLeft: 20 }}></TextInput>
              </View>
              <View
                style={{
                  height: 60,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#EAEAEA",
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={{ marginLeft: 20, color: "#666" }}>
                  Card number
                </Text>
                <TextInput
                  style={{ marginLeft: 20 }}
                  keyboardType="number-pad"
                ></TextInput>
              </View>
              <View
                style={{
                  height: 60,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#EAEAEA",
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={{ marginLeft: 20, color: "#666" }}>
                  Expire Date
                </Text>
                <TextInput style={{ marginLeft: 20 }}></TextInput>
              </View>
              <View
                style={{
                  height: 60,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#EAEAEA",
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={{ marginLeft: 20, color: "#666" }}>CVV</Text>
                <TextInput style={{ marginLeft: 20 }}></TextInput>
              </View>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#EAEAEA",
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#D3A762",
                }}
              >
                <Text style={{ color: "#fff" }}>Save card</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
      </Modal>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    // justifyContent:'center',
    marginHorizontal: 20,
  },
});
