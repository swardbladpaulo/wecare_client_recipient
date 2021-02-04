import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import donor1 from '../assets/images/donor1.png'
import donor2 from '../assets/images/donor2.png'
import donor3 from '../assets/images/donor3.png'

const StartScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text style={styles.bodyText}>
          Here you can register for an account and find a foodbag near you!
        </Text>
        <Text style={styles.partner}>Our Partners</Text>
        <View style={styles.foodStore}>
          <Image style={styles.storeImage} source={donor1} />
          <Image style={styles.storeImage} source={donor2} />
          <Image style={styles.storeImage} source={donor3} />
        </View>
        <Text style={styles.bodyText}>
          We have signed some of the most popular food stores in Sweden that
          will ensure the highest food quality
        </Text>
        <View style={styles.parent}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.button}
            onPress={() => {
              navigation.navigate('RegisterForm')
            }}
          >
            <Text style={styles.text}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  bodyText: {
    backgroundColor: 'white',
    fontSize: 25,
    color: '#4a4443',
    textAlign: 'justify',
    padding: 25,
    fontFamily: 'Helvetica',
  },
  image: {
    paddingTop: 10,
    height: 120,
    width: Dimensions.get('window').width,
  },
  storeImage: {
    height: 90,
    width: 90,
    borderRadius: 20,
  },
  foodStore: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 10,
  },
  partner: {
    fontSize: 25,
    backgroundColor: '#b299e5',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 15,
    height: 60,
  },
  parent: {
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  button: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    elevation: 3,
    margin: 39,
    borderRadius: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
})
