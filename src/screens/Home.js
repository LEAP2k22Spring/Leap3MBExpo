import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import coffeedata from "../../data/coffeedata.json";
import { useAddBag } from "../context/AddBagContext";
import notifee, { AuthorizationStatus } from "@notifee/react-native";
import { useEffect } from "react";
import { requestUserPermission, NotificationListner, GetFCMToken } from "../utils/notification_helper";

const HomeScreen = ({ navigation }) => {
  const navigator = useNavigation();
  const { addToBag, setAddToBag } = useAddBag();

  const Item = ({ title, index }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { marginRight: 10, marginLeft: index !== 0 ? 0 : 10 },
      ]}
      onPress={() =>
        navigator.navigate("ItemScreen", {
          imageUrl: title.image,
          price: title.price,
        })
      }
    >
      <Image style={styles.itemImage} source={{ uri: title.image }} />
      <View style={styles.itemText}>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>{title.title}</Text>
        <Text>{`$${title.price} / spruce`}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(()=>{
    requestUserPermission()
    NotificationListner()
  },[])
  const onDisplayNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    // await notifee.requestPermission({
    //   provisional: true,
    // })
    const settings = await notifee.requestPermission({
      provisional: true,
    });
    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    } else {
      console.log("User declined permissions");
    }
    await notifee.displayNotification({
      id:'123',
      title: "My first notification",
      body: "Main body content of the notification",
      ios: {
        attachments: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
            // thumbnailHidden: true,
            thumbnailClippingRect: (0.5, 0.5) 
          },
          ],
        sound: 'local.wav',
        },
    });
  };

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={styles.animationContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.headerLogo}
            source={require("../../assets/logo.png")}
          />
          <View style={styles.headerBag}>
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
              <Ionicons name="basket-outline" size={24} color="#000" />
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                backgroundColor: "#D3A762",
                // marginTop: -5,
                marginTop: 10,
                right: 30,
              }}
            >
              <Text style={{ color: "#FFFF", fontSize: 10 }}>
                {addToBag.length}
              </Text>
            </View>
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
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}>
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
            borderRadius: 10,
            justifyContent: "center",
            position: "relative",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              width: "60%",
              color: "#FFFF",
              fontSize: 25,
              marginLeft: 20,
            }}
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
        {/* <View style={{ width: "100%", justifyContent: "center" }}>
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 20,
              fontSize: 20,
              fontWeight: "400",
            }}
          >
            Your favourite
          </Text>
        </View>
        <View style={styles.itemlist}>
          <FlatList
            data={coffeedata}
            renderItem={({ item, index }) => (
              <Item title={item} index={index} />
            )}
            keyExtractor={(item, index) => index}
            horizontal
          />
        </View> */}
        <View style={{ flex: 5 }}>
          <ScrollView style={{ width: "100%", height: "100%" }}>
            <View style={{}}>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                  fontSize: 20,
                  fontWeight: "400",
                  marginTop: 20,
                }}
              >
                Your favourite
              </Text>
            </View>
            <View style={styles.itemlist}>
              <FlatList
                data={coffeedata}
                renderItem={({ item, index }) => (
                  <Item title={item} index={index} />
                )}
                keyExtractor={(item, index) => index}
                horizontal
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                  fontSize: 20,
                  fontWeight: "400",
                  marginTop: 20,
                }}
              >
                Seasonal drinks
              </Text>
            </View>
            <View style={styles.itemlist}>
              <FlatList
                data={coffeedata}
                renderItem={({ item, index }) => (
                  <Item title={item} index={index} />
                )}
                keyExtractor={(item, index) => index}
                horizontal
              />
            </View>
            <Pressable
              style={[styles.loginButton, styles.centerView]}
              onPress={async () => {
                onDisplayNotification();
              }}
            >
              <Text>Enter</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    // backgroundColor: "#000",
    // alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  centerView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    // width: "100%",
    // height: 56,
    flex: 1,
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
    right: 10,
  },
  bottomHeader: {
    width: "100%",
    backgroundColor: "#2D2A2B",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomHeaderText: {
    margin: 20,
  },
  item: {
    width: 160,
    borderRadius: 10,
  },
  itemText: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  itemImage: {
    flex: 3,
    borderRadius: 10,
  },
  itemlist: {
    height: 300,
  },
  loginButton: {
    width: "90%",
    height: 40,
    backgroundColor: "#D3A762",
    borderRadius: 5,
    marginLeft: 20,
  },
});
export default HomeScreen;
