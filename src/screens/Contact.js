import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoadingComp from "../component/LoadingComp";
import * as Contacts from "expo-contacts";

const ContactScreen = () => {
  const [usersData, setUsersData] = useState([]);
  const [isEnable, setIsEnable] = useState(false);

  // useEffect(() => {
  //   const getUsersData = async () => {
  //     setIsEnable(false);

  //     try {
  //       const res = await axios.get(
  //         "https://dummyjson.com/users?limit=50&skip=10&select=firstName,age"
  //       );
  //       setUsersData(res.data.users);
  //       setIsEnable(true);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   getUsersData();
  // }, []);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data;
          setUsersData(contact);
        }
      }
    })();
    setIsEnable(true)
  }, []);
  const Item = ({ firstName, lastName }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
    </View>
  );
  // const sort = [...usersData].sort((a, b) =>
  //   a.firstName > b.firstName ? 1 : -1
  // );

  return (
    <SafeAreaView>
      {isEnable ? (
        <FlatList
          data={usersData}
          renderItem={({ item, index }) => <Item firstName={item.firstName} lastName={item.lastName} />}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <LoadingComp />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  title: {
    width: "100%",
    margin: 10,
  },
});
export default ContactScreen;
