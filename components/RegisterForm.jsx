import React, { useState } from 'react'
import Auth from '../modules/auth'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const RegisterForm = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconfirmation, setPasswordconfirmation] = useState('')
  const auth = new Auth({ host: 'http://localhost:3000/api' })

  const authenticateUser = navigation => {
    auth
      .signUp({
        email: email,
        password: password,
        password_confirmation: passwordconfirmation,
      })
      .then(() => {
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
        color='#CC5095'
        title='Register'
        onPress={() => authenticateUser(navigation)}
      />
    </View>
  )
}

export default RegisterForm

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#CC5095',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#CC5095',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    elevation: 3,
    margin: 39,
    borderRadius: 20,
  },
  partner: {
    fontSize: 30,
    color: '#CC5095',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 15,
    height: 60,
  },
})
