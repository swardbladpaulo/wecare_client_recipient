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

const Stack = createStackNavigator()

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function LogIn() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
    </View>
  )
}

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
      <MyTabs />
    </NavigationContainer>
  )
}

// const App = () => {
//   const { appHeader } = useSelector(state => state)
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       <MyTabs />
//         {/* <Stack.Screen
//           name='weCare a lot'
//           component={StartScreen}
//           options={props => ({
//             headerRight: () => {
//               return (
//                 <FontAwesome5
//                   name='id-card-alt'
//                   size={24}
//                   color='#ffe8d4'
//                   onPress={() => props.navigation.navigate('SignIn')}
//                   style={{ marginRight: 15 }}
//                 />
//               )
//             },
//             title: appHeader,
//             ...styles,
//           })}
//         />
//         <Stack.Screen name='StartPage' component={StartScreen}></Stack.Screen>

//         <Stack.Screen
//           name='DisplayFoodBagList'
//           component={DisplayFoodBagList}
//         ></Stack.Screen>
//         <Stack.Screen name='SignIn' component={SignIn} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = {
//   headerStyle: {
//     backgroundColor: '#ce93b6',
//   },
//   headerTitleStyle: {
//     color: '#ffe8d4',
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
// }
