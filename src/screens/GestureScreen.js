import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Image,
  ImagePickerIOS,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// const test =

const GestureScreen = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    (async () => {
      if (Platform.OS === "ios") {
        const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("sorry not granted");
          console.log("status", status);
        }
      }
    })();
  }, []);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUrl(result.assets[0].uri);
    }
  };
  // const openGallery = async ()=>{
  //   const options = {
  //     storageOptions:{
  //       path:'image',
  //       mediaType:'photo'
  //     },
  //     includeBase64:true,
  //   }
  //   await launchImageLibrary(options, response =>{
  //     // console.log("response", response.assets);
  //      if(response.didCancel){
  //       console.log("user cancelled");
  //      }else{
  //       const source = {uri:'data:image/jpeg;base64,' + response.assets[0].base64};
  //       setImageUrl(source)
  //   // console.log("imageUrl", imageUrl);
  //      }
  //   })
  // }
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
          source={imageUrl ? { uri: imageUrl } : require('../../assets/splash.png')}
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
            <Ionicons
              name="reload-outline"
              size={24}
              color="black"
              onPress={() => setIsTrue(false)}
            />
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
            onPress={() => pickImage()}
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
