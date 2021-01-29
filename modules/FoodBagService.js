import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'https://git.heroku.com/weca.git'
const FoodBagService = {
  async index() {
    let response = await axios.get(API_URL + '/foodbag')
    store.dispatch({
      type: 'FETCH_FOODBAG_INDEX',
      payload: response.data.foodbag,
    })
  },
  async show(id, credentials) {
    let response = await axios.get(API_URL + `/foodbag/${id}`, {
      headers: credentials,
    })
    store.dispatch({
      type: 'SET_CURRENT_FOODBAG',
      payload: response.data.foodbag,
    })
  },
}

export default FoodBagService