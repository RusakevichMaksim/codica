import axios from "axios";
import { weatherAPIKey } from "../key/key";
const weatherOpen = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
});

const weatherAPI = {
  getCity(cityName: string) {
    return weatherOpen
      .get(`weather?q=${cityName}&appid=${weatherAPIKey}&units=metric`)
      .then((response) => response.data);
  },
};

export { weatherAPI };
