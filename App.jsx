import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import { FontAwesome5 } from '@expo/vector-icons'
import SignIn from './components/SignIn'
import DisplayFoodBagList from './components/DisplayFoodBagList'

const Stack = createStackNavigator()

const App = () => {
  const { appHeader } = useSelector((state) => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='weCare'
          component={Home}
          options={(props) => ({
            headerRight: () => {
              return (
                <FontAwesome5
                  name='id-card-alt'
                  size={24}
                  color='#ffe8d4'
                  onPress={() => props.navigation.navigate('SignIn')}
                  style={{ marginRight: 15 }}
                />
              )
            },
            title: appHeader,
            ...styles,
          })}
        />
        <Stack.Screen
          name='DisplayFoodBagList'
          component={DisplayFoodBagList}
        ></Stack.Screen>
        <Stack.Screen name='SignIn' component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

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
