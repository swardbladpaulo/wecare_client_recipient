import React, { useState } from 'react'
import Auth from '../modules/auth'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

const RegisterForm = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconfirmation, setPasswordconfirmation] = useState('')
  const [message, setMessage] = useState()
  const auth = new Auth({ host: 'http://localhost:3000/api' })

  const authenticateUser = navigation => {
    auth
      .signUp({
        email: email,
        password: password,
        password_confirmation: passwordconfirmation,
        role: 'recipient',
      })
      .then(async response => {
        await AsyncStorage.setItem(
          'auth-storage',
          JSON.stringify(response.headers)
        )
        navigation.navigate('DisplayFoodBagsList')
        alert('Welcome!')
      })
      .catch(error => {
        setMessage(error.response.data.errors[0])
      })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.partner}>Register here</Text>
      <TextInput
        style={styles.input}
        placeholder='Email:'
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password:'
        secureTextEntry={true}
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password confirmation:'
        secureTextEntry={true}
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={text => setPasswordconfirmation(text)}
      />
      <Button
        style={styles.button}
        title='Register'
        type='solid'
        color='#8FBC8F'
        onPress={() => authenticateUser(navigation)}
      />
      {message && <Text>{message}</Text>}
    </View>
  )
}
export default RegisterForm
const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#b299e5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 13,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partner: {
    fontSize: 30,
    color: '#9370DB',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 15,
    height: 60,
  },
})
