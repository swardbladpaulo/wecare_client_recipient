import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, Switch, SafeAreaView } from 'react-native'
import { Card } from 'react-native-elements'
import FoodBagService from '../modules/FoodBagService'
import DonorService from '../modules/DonorService'

const DisplayFoodBag = ({ foodbag, id }) => {
  const [switchValue, setSwitchValue] = useState(false)

  useEffect(() => {
    DonorService.show(id)
  }, [])

  const toggleSwitch = async foodbag => {
    setSwitchValue(true)
    debugger
    let response = await FoodBagService.update(foodbag)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card>
        <Image style={styles.storeImage} src={foodbag.donor.image} />
        <Card.Title style={styles.coName}>
          {foodbag.donor.company_name}
        </Card.Title>
        <Text style={styles.coAdress}>{foodbag.donor.adress}</Text>
        <Text style={styles.coAdress}>
          {foodbag.donor.zipcode} {foodbag.donor.city}
        </Text>
        <Card.Divider />
        <Text style={styles.foodbagInfo}>
          Pickup in the {foodbag.pickuptime}
        </Text>
        {!switchValue && foodbag.status === 'available' && (
          <>
            <Text style={styles.foodbagReserve}>Reserve this bag</Text>
            <Switch
              trackColor={{ false: 'red', true: '#8FBC8F' }}
              onValueChange={() => toggleSwitch(foodbag)}
              value={switchValue}
            />
          </>
        )}

        <Text style={styles.toggle}>
          {switchValue && 'You foodbag is reserved'}
        </Text>
      </Card>
    </SafeAreaView>
  )
}

export default DisplayFoodBag

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
    color: '#9370DB',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  pickuptime: {
    fontSize: 20,
    color: '#9370DB',
  },
  toggle: {
    fontSize: 18,
    padding: 3,
    marginBottom: 5,
    marginTop: 2,
  },
})
