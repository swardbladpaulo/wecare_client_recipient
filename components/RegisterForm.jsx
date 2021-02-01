import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username:'
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('username', val)}
      />
        <TextInput
          style={styles.input}
          placeholder='Phone Number:'
          keyboardType='numeric'
          autoCapitalize='none'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('email', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('password', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password confirmation'
        secureTextEntry={true}
        autoCapitalize='none'
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('password_confirmation', val)}
      />
      {/* <Button title='Sign Up' onPress={this.signUp} /> */}
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
})
