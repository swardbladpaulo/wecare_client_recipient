import React, { useEffect } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import DisplayFoodBag from './DisplayFoodBag'
import FoodBagService from '../modules/FoodBagService'

const DisplayFoodBagsList = ({ navigation }) => {
  const { foodbags } = useSelector((state) => state)
  useEffect(() => {
    FoodBagService.index()
  }, [])
  return (
    
    <ScrollView style={{ flex: 1}}>
    <View style={styles.container}>
      <StatusBar style='auto' />
      <FlatList
        data={foodbags}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DisplayFoodBag navigation={navigation} foodbag={item} />
        )}
      />
    </View>
    </ScrollView>
  )
}

export default DisplayFoodBagsList

const styles = {
  headerStyle: {
    backgroundColor: '#ce93b6',
  },
  headerTitleStyle: {
    color: '#ffe8d4',
    fontSize: 25,
    fontWeight: 'bold',
  },
}
