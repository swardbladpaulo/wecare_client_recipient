import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DisplayFoodBagsList from './components/DisplayFoodBagsList'
import RegisterForm from './components/RegisterForm'
import StartScreen from './components/StartScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Text style={styles.appTitle}>
        weCare
        <FontAwesome5 name='heart' size={40} color='white' />
      </Text>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'StartScreen') {
              iconName = focused ? 'home-outline' : 'home-outline'
            } else if (route.name === 'RegisterForm') {
              iconName = focused ? 'person-outline' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#9370DB',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='StartScreen' component={StartScreen} />
        <Tab.Screen
          name='DisplayFoodBagsList'
          component={DisplayFoodBagsList}
        />
        <Stack.Screen name='RegisterForm' component={RegisterForm} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App

const styles = StyleSheet.create({
  appTitle: {
    backgroundColor: '#9370DB',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    paddingTop: 45,
    padding: 25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
})
