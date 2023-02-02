import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const PictureScreen = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/1");
        setUsersData(res.data.images);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsersData();
  }, []);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: title }} />
    </View>
  );
  return (
    <>
      <FlatList
        data={usersData}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <FlatList
        data={usersData}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
const styles = StyleSheet.create({
  item: {
    display: "flex",
    width: 200,
    height: 200,
    borderWidth: 1,
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
export default PictureScreen;
