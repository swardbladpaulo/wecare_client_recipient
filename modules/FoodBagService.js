import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'https://git.heroku.com/weca.git'
// const API_URL = 'http://localhost:3000/api'
const FoodBagService = {
  async index() {
    let response = await axios.get(API_URL + '/foodbags')
    store.dispatch({
      type: 'FETCH_FOODBAG_INDEX',
      payload: response.data.foodbags,
    })
  },
}

export default FoodBagService
