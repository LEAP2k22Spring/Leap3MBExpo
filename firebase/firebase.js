import { useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

export const useCollection = () => {
  const getData = async () => {
    console.log("Starting");
    try {
      const usersCollection = await firestore()
        .collection("Users")
        .doc("oE0Oxg82kzIcap7lGIzt")
        .get();
      console.log("usersCollection", usersCollection);
    } catch (error) {
      console.log("error", error);
    }
  };
  return { getData };
};
