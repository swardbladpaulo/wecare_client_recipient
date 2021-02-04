import React, { useState } from 'react'
import { Image, StyleSheet, Text, Switch, SafeAreaView } from 'react-native'
import { Card } from 'react-native-elements'
import donor1 from '../assets/images/donor1.png'
import { useDispatch } from 'react-redux'
import FoodbagService from '../modules/FoodBagService'

const DisplayFoodBag = ({ foodbag }) => {
  const dispatch = useDispatch()
  const [switchValue, setSwitchValue] = useState(false)

  const toggleSwitch = (value) => {
    FoodbagService(foodbag, dispatch)
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
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
        <Text style={styles.coAdress}>ZipCode city</Text>
        <Text style={styles.foodbagInfo}>
          Pickup this: {foodbag.pickuptime}
        </Text>
        <Text style={styles.foodbagInfo}>The bag is: {foodbag.status}</Text>
        <Text style={styles.foodbagReserve}>
          Reserve this bag:{' '}
          <Switch
            trackColor={{ false: 'grey', true: 'blue' }}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </Text>
        <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
      </Card>
    </SafeAreaView>
  )
}

export default DisplayFoodBag

const styles = StyleSheet.create({
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
  },
  storeImage: {
    height: 60,
    width: 60,
    borderRadius: 20,
    padding: 10,
    marginBottom: 2,
  },
  foodbagReserve: {
    fontSize: 20,
    color: 'blue',
  },
})
