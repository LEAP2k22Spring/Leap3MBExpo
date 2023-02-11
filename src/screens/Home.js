import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import coffeedata from "../../data/coffeedata.json";
const HomeScreen = ({ navigation }) => {
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: title.image }} />
    </View>
  );
  return (
    <SafeAreaView style={styles.animationContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/logo.png")}
        />
        <View style={styles.headerBag}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <View style={styles.bottomHeaderText}>
          <Text style={{ color: "#fff", fontSize: 12, opacity: 0.6 }}>
            Pick-up store
          </Text>
          <Text style={{ color: "#fff", fontSize: 15 }}>
            Barkley village * 0.5 mi
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", margin: 20 }}>
          <Ionicons
            name="chevron-forward"
            size={30}
            color="black"
            style={{ color: "#fff" }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "#1E3932",
          width: "90%",
          margin: 20,
          borderRadius: 10,
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text
          style={{ width: "60%", color: "#FFFF", fontSize: 25, marginLeft: 20 }}
        >
          HERE’S TO MORE SUNNY DAYS AHEAD!
        </Text>
        <View
          style={{
            width: "90%",
            position: "absolute",
            height: "100%",
            alignItems: "flex-end",
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
            }}
            source={require("../../assets/Bitmap.png")}
          />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "400" }}>
          Your favourite
        </Text>
      </View>
      <View style={{}}>
        {/* <FlatList
        data={coffeedata}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item, index) => index}
        horizontal
      /> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  headerLogo: {
    width: "100%",
    height: 30,
    resizeMode: "contain",
  },
  headerBag: {
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
    padding: 20,
  },
  bottomHeader: {
    width: "100%",
    height: 80,
    backgroundColor: "#2D2A2B",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomHeaderText: {
    margin: 20,
  },
  item: {
    // display: "flex",
    flex: 1,
    width: 160,
    height: 300,
    // margin: 20,
    backgroundColor: "#1E3932",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    // resizeMode:'',
  },
});
export default HomeScreen;
