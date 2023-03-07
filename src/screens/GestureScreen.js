import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
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
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
// const test =

const GestureScreen = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [emojiIsTrue, setEmojiIsTrue] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    (async () => {
      if (Platform.OS === "ios") {
        const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("sorry not granted");
        }
      }
    })();
  }, []);
  const emojiScaleup = useSharedValue(1);
  const emojiDragX = useSharedValue(0);
  const emojiDragY = useSharedValue(0);
  const scalingStyle = useAnimatedStyle(() => ({
    transform: [{ scale: emojiScaleup.value }],
  }));
  const scaleUpEmoji = useAnimatedGestureHandler({
    onStart: () => {
      emojiScaleup.value = withTiming(emojiScaleup.value);
    },
    onEnd: () => {
      if (emojiScaleup.value < 4) {
        emojiScaleup.value = withTiming(emojiScaleup.value + 3);
      } else {
        emojiScaleup.value = withTiming(emojiScaleup.value - 3);
      }
    },
  });
  const dragingStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: emojiDragX.value },
      { translateY: emojiDragY.value },
    ],
  }));
  const dragUpEmoji = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = emojiDragX.value;
      context.translateY = emojiDragY.value;
    },
    onActive: (event, context) => {
      emojiDragX.value = context.translateX + event.translationX;
      emojiDragY.value = context.translateY + event.translationY;
    },
    onEnd: (event, context) => {
      context.translateX = emojiDragX.value;
      context.translateY = emojiDragY.value;
    },
  });
  const resetButton = () => {
    {
      setIsTrue(false),
        setEmojiIsTrue(false)
        emojiDragX.value = 0
        emojiDragY.value = 0
    }
  };

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
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#3333" }}>
      <View
        style={{
          height: 550,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          style={{ height: 300, width: "90%", borderRadius: 20 }}
          source={
            imageUrl ? { uri: imageUrl } : require("../../assets/splash.png")
          }
        />
        {emojiIsTrue ? (
          <PanGestureHandler onGestureEvent={dragUpEmoji}>
            <Animated.View
              style={[dragingStyle, { position: "absolute", zIndex: 100 }]}
            >
              <TapGestureHandler onGestureEvent={scaleUpEmoji} numberOfTaps={2}>
                <Animated.View
                  style={[scalingStyle, { top: 100 }]}
                >
                  <Image
                    style={{ height: 50, width: 50, borderRadius: 30 }}
                    source={require("../../assets/smiley.png")}
                  />
                </Animated.View>
              </TapGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        ) : (
          ""
        )}
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
              onPress={() => {
                resetButton();
              }}
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
            onPress={() => setEmojiIsTrue(true)}
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
