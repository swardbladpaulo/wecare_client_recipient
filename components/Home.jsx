import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import DisplayFoodBagList from "./DisplayFoodBagList";
import FoodBagService from "../modules/FoodBagService";


const Home = ({ navigation }) => {
  const { articles } = useSelector(state => state);
  useEffect(() => {
    FoodBagService.index();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DisplayFoodBagList navigation={navigation} article={item} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebc1c4",
  },
});