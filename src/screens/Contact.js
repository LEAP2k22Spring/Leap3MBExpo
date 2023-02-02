import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import LoadingComp from "../component/LoadingComp";

const ContactScreen = () => {
  const [usersData, setUsersData] = useState([]);
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    const getUsersData = async () => {
      setIsEnable(false);

      try {
        const res = await axios.get(
          "https://dummyjson.com/users?limit=50&skip=10&select=firstName,age"
        );
        setUsersData(res.data.users);
        setIsEnable(true);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsersData();
  }, []);
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const sort = [...usersData].sort((a, b) =>
    a.firstName > b.firstName ? 1 : -1
  );

  return (
    <>
      {isEnable ? (
        <FlatList
          data={sort}
          renderItem={({ item, index }) => <Item title={item.firstName} />}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <LoadingComp />
      )}
    </>
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
