import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const StartScreen = () => {
  return (
    <>
    {/* <Image source={assets/wecarelogo.png}/> */}
    <View>
      <Text>Hello hej hej på dig</Text>
    </View>
    </>
  )
}

export default StartScreen

const styles = {
  headerStyle: {
    backgroundColor: 'blue',
  },
  headerTitleStyle: {
    color: '#ffe8d4',
    fontSize: 25,
    fontWeight: 'bold',
  },
}

