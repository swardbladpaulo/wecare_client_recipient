import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, ScrollView, RefreshControl } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import DisplayFoodBag from "./DisplayFoodBag";
import FoodBagService from "../modules/FoodBagService";

const DisplayFoodBagsList = ({ navigation }) => {
  const { foodbags } = useSelector((state) => state);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    FoodBagService.index();
  }, []);

  const onRefresh = useCallback( async () => {
    setRefresh(true);
    await FoodBagService.index().then(() => {
      setRefresh(false);
    });
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={foodbags}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DisplayFoodBag navigation={navigation} foodbag={item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default DisplayFoodBagsList;

const styles = {
  headerStyle: {
    backgroundColor: "#ce93b6",
  },
  headerTitleStyle: {
    color: "#ffe8d4",
    fontSize: 25,
    fontWeight: "bold",
  },
};
