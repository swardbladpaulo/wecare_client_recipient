import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
