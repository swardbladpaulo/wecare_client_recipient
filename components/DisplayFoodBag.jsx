import React, { useState } from "react";
import { Image, StyleSheet, Text, Switch, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import donor1 from "../assets/images/donor1.png";
import { useDispatch } from "react-redux";
import FoodBagService from "../modules/FoodBagService";
// import FoodbagService from '../modules/FoodBagService'

const DisplayFoodBag = ({ navigation, foodbag }) => {
  const dispatch = useDispatch();
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = async (foodbag, navigation) => {
    setSwitchValue(true);
    let response = await FoodBagService.update(foodbag, navigation);
    //state changes according to switch
    //which will result in re-render the text
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card>
        <Image style={styles.storeImage} source={donor1} />
        <Card.Title style={styles.coName}>
          {foodbag.company_name}Company name
        </Card.Title>
        <Text style={styles.coAdress}>Adress</Text>
        <Text style={styles.coAdress}>ZipCode City</Text>
        <Card.Divider />
        <Text style={styles.foodbagInfo}>This bag is {foodbag.status}</Text>
        <Text style={styles.foodbagInfo}>
          Pickup in the {foodbag.pickuptime}
        </Text>
        <Text style={styles.foodbagReserve}>Reserve this bag:</Text>
        {!switchValue && (
          <Switch
            trackColor={{ false: "red", true: "#8FBC8F" }}
            onValueChange={() => toggleSwitch(foodbag, navigation)}
            value={switchValue}
          />
        )}

        <Text style={styles.toggle}>
          {switchValue && 'This foodbag is already reserved'}
        </Text>
      </Card>
    </SafeAreaView>
  );
};

export default DisplayFoodBag;

const styles = StyleSheet.create({
  storeImage: {
    height: 60,
    width: 60,
    borderRadius: 20,
    padding: 10,
    marginBottom: 2,
  },
  coName: {
    fontSize: 20,
  },
  coAdress: {
    fontSize: 15,
    paddingBottom: 10,
  },
  foodbagInfo: {
    fontSize: 18,
    padding: 2,
    marginBottom: 2,
  },
  foodbagReserve: {
    fontSize: 20,
    color: "#9370DB",
    marginBottom: 5,
    fontWeight: "bold",
  },
  pickuptime: {
    fontSize: 20,
    color: "#9370DB",
  },
  toggle: {
    fontSize: 18,
    padding: 3,
    marginBottom: 5,
    marginTop: 2,
  },
});
