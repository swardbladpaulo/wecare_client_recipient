import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useSelector } from 'react-redux'

const ApplicationHeader = () => {
  const { appTitle } = useSelector((state) => state)
  return (
    <Appbar.Header>
      <Appbar.Content title={appTitle} />
    </Appbar.Header>
  )
}

export default ApplicationHeader

const styles = StyleSheet.create({})
