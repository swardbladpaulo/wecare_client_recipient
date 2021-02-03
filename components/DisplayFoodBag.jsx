import React from 'react'
import { Image, StyleSheet, View, Text, Dimensions } from 'react-native'
import { Card, } from 'react-native-elements'
import donor1 from '../assets/images/donor1.png'

const DisplayFoodBag = ({ foodbag }) => {
  return (
    <Card>
      <Image style={styles.storeImage} source={donor1} />
      <Card.Title style={styles.coName}>Company name</Card.Title>
      <Text style={styles.coAdress}>Adress</Text>
      <Text style={styles.coAdress}>ZipCode city</Text>
      <Text style={styles.foodbagInfo}>Pickup Time: {foodbag.pickuptime}</Text>
      <Text style={styles.foodbagInfo}>The bag is: {foodbag.status}</Text>    
    </Card>
    //   <View>
    //     <Image source={{ uri: foodbag.image }} style={styles.indexImage} />
    //     <Text style={styles.title}>{foodbag.status}</Text>
    //     <Text>{foodbag.pickuptime}</Text>
    //     <Text>{foodbag.created_at}</Text>
    //   </View>
    //
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
})
