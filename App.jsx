import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import { FontAwesome5 } from '@expo/vector-icons'
import SignIn from './components/SignIn'
import DisplayFoodBagList from './components/DisplayFoodBagList'
import StartScreen from './components/StartScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={StartScreen} />
      <Tab.Screen name='Log in'  component={SignIn} />       
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Log In') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#7f055f',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={StartScreen} />
        <Tab.Screen name="Log In" component={SignIn} onPress={() => props.navigation.navigate('SignIn')}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

