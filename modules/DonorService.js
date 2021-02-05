import axios from 'axios'
import store from '../state/store/store'
import AsyncStorage from '@react-native-community/async-storage'
// const API_URL = 'https://git.heroku.com/weca.git'
const API_URL = 'http://localhost:3000/api'

const DonorService = {
  async show(id) {
    const headers = JSON.parse(await AsyncStorage.getItem('auth-storage'))
    try {
      let response = await axios.get(API_URL + `/user/${id}`, {
        headers: headers,
      })
      store.dispatch({
        type: 'SET_DONOR_DATA',
        payload: response.data.donor,
      })
    } catch (error) {
      console.log(error)
    }
  },
}
export default DonorService
