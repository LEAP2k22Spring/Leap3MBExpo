import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { IconButton, Portal } from "react-native-paper";

const BottomSheet = ({ show, onDismiss, enableBackdropDismiss, children }) => {
  const bottomSheetHeight = Dimensions.get("window").height * 0.68;
  const deviceWidth = Dimensions.get("window").width;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = (event) => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show !== 0) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(0);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }
  return (
    <Portal>
      <Pressable
        onPress={enableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      />
      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,
            shadowOffset: {
              height: -3,
            },
          },
          styles.common,
        ]}
      >
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View
            style={[
              styles.header,
              styles.common,
              {
                position: "relative",
                shadowOffset: {
                  height: 3,
                },
              },
            ]}
          >
            <View
              style={{
                width: 60,
                height: 3,
                borderRadius: 1.5,
                position: "absolute",
                top: 8,
                left: (deviceWidth - 60) / 2,
                zIndex: 10,
                backgroundColor: "#ccc",
              }}
            />
            <Text style={styles.closeText}>
              {show === 1 ? "Milk" : show === 2 ? "Foam" : "Whipping Cream"}
            </Text>
            <IconButton
              color="red"
              icon="close"
              style={styles.closeIcon}
              onPress={onDismiss}
            />
          </View>
        </PanGestureHandler>
        {children}
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  header: {
    height: 44,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  common: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  closeText: {
    left: 20,
    fontSize: 20,
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    top: -3,
    zIndex: 10,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: "rgba(0,0,0, 0.12)",
  },
});

export default BottomSheet;
