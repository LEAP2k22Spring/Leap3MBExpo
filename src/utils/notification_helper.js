import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
    GetFCMToken()
  }
}

const GetFCMToken = async () => {
  console.log("starting");
  let fcmtoken = await AsyncStorage.getItem("fcmtoken");
  console.log(fcmtoken, "old token");

  if (!fcmtoken) {
    try {
      const fcmtoken = await messaging()
        .getToken()
      console.log(fcmtoken, "old token2");
      if (fcmtoken) {
        // await AsyncStorage.setItem("fcmtoken", fcmtoken);
        console.log("bi bna");
      }
    } catch (error) {
      console.log(error, "error in fcmtoken");
    }
  }
};
export const NotificationListner = () => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
  });
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
      }
    });
  messaging().onMessage(async (remoteMessage) => {
    console.log("Notification on froground ....", remoteMessage);
  });
};
