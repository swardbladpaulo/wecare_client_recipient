import React from "react"
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native"
import { useSelector } from "react-redux"

const DisplayFoodBagList = ({ navigation, foodbag }) => {
  const { credentials } = useSelector(state => state)

  return (
    <TouchableOpacity
      onPress={() => {
        if (credentials) {
          navigation.navigate("SingleBag", { foodbag: foodbag })
        }
      }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{foodbag.foodbag}</Text>
        <Text style={styles.lead}>{foodbag.pickuptime}</Text>
        <Text style={styles.created}>{foodbag.created}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DisplayFoodBagList;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 0,
    backgroundColor: "rgba(14, 13, 13, 0.6)",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  lead: {
    color: "white",
    fontSize: 16,
  },
  created: {
    color: "white",
    fontSize: 12,
    paddingBottom: 5,
    paddingTop: 3,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});