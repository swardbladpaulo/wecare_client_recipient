import axios from "axios";
import store from "../state/store/store";
import AsyncStorage from "@react-native-community/async-storage";
// const API_URL = 'https://git.heroku.com/weca.git'
const API_URL = "http://localhost:3000/api";
const FoodBagService = {
  async index() {
    const headers = JSON.parse(await AsyncStorage.getItem("auth-storage"));
    let response = await axios.get(API_URL + "/foodbags", {
      headers: headers,
    });
    store.dispatch({
      type: "FETCH_FOODBAG_INDEX",
      payload: response.data.foodbags,
    });
  },

  async update(foodbag, navigation) {
    const headers = JSON.parse(await AsyncStorage.getItem("auth-storage"));
    try {
      let response = await axios.put(
        API_URL + `/foodbags/${foodbag.id}`,
        {
          status: "reserved",
        },
        {
          headers: headers,
        }
      );

      alert(response.data.message);
      navigation.navigate("DisplayFoodBagsList");
    } catch (error) {
      console.log(error);
    }
  },
};

export default FoodBagService;
