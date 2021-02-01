import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './components/SignIn'
import StartScreen from './components/StartScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import RegisterForm from './components/RegisterForm'
import { StyleSheet, Text } from 'react-native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={StartScreen} />
      <Tab.Screen name='Log in' component={SignIn} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Text style={styles.appTitle}>weCare</Text>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline'
            } else if (route.name === 'Log In') {
              iconName = focused ? 'person-outline' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#CC5095',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Home' component={StartScreen} />
        <Tab.Screen
          name='Log In'
          component={SignIn}
          onPress={() => props.navigation.navigate('SignIn')}
        />
        <Stack.Screen name='RegisterForm' component={RegisterForm} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  appTitle: {
    backgroundColor: '#CC5095',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    paddingTop: 45,
    padding: 25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
})
