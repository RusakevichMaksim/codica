import axios from "axios";
import { weatherAPIKey } from "../key/key";
const weather = axios.create({
  baseURL: `https://pro.openweathermap.org/data/2.5/`,
  // headers: {
  //   "API-KEY": `${weatherAPI}`,
  // },
});

const weatherAPI = {
  getCity(cityName) {
    return weather
      .get(`forecast/hourly?q=${cityName}&appid=${weatherAPIKey}`)
      .then((response) => response.data);
  },
};

export { weatherAPI };
