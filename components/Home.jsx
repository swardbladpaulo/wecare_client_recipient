import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import DisplayFoodBagList from './DisplayFoodBagList'
import FoodBagService from '../modules/FoodBagService'

const Home = ({ navigation }) => {
  const { foodbags } = useSelector((state) => state)
  useEffect(() => {
    FoodBagService.index()
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <FlatList
        data={foodbags}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DisplayFoodBagList navigation={navigation} foodbag={item} />
        )}
      />
    </View>
  )
}

export default Home

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
