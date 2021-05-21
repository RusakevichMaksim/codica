import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/openweather";
import { AppStateType } from "./store";
const SET_WEATHER_DATA = ` SET-WEATHER-DATA`;
const SET_CITY_NAME = "SET-CITY-NAME";
const SET_CITY_DATA = "SET-CITY-DATA";
export type CityData = {
  id: number;
  lat: number;
  lon: number;
  name: string;
  temp: number;
};

export type InitialState = {
  id: number | null;
  citySelected: string;
  cityNameList: Array<string>;
  cityGroup: Array<CityData>;
};

export type CityGroup = {};

let initialState: InitialState = {
  id: null,
  citySelected: "",
  cityNameList: ["kyiv"],
  cityGroup: [
    {
      id: 703448,
      lat: 50.4333,
      lon: 30.5167,
      name: "Kyiv",
      temp: 19.55,
    },
  ],
};

const doubleNameReject = (city: string, array: Array<string>) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i], city);
    if (array[i] === city.toLowerCase()) {
      return true;
    }
  }
  return false;
};

const weatherReducer = (
  state = initialState,
  action: ActionTypes
): InitialState => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, id: action.data };
    case SET_CITY_NAME:
      return { ...state, citySelected: action.data };
    case SET_CITY_DATA:
      console.log(state.cityGroup, action.newItem);
      if (doubleNameReject(state.citySelected, state.cityNameList)) {
        return state;
      }
      return {
        ...state,
        cityNameList: [
          ...state.cityNameList,
          action.newItem.name.toLocaleLowerCase(),
        ],
        cityGroup: [...state.cityGroup, action.newItem],
      };

    default:
      return state;
  }
};
export type SetWeatherDataAC = {
  type: typeof SET_WEATHER_DATA;
  data: number;
};
export const setWeatherDataAC = (id: number): SetWeatherDataAC => ({
  type: SET_WEATHER_DATA,
  data: id,
});

export type setCityNameAC = {
  type: typeof SET_CITY_NAME;
  data: string;
};

export const setCityNameAC = (name: string): setCityNameAC => ({
  type: SET_CITY_NAME,
  data: name,
});

export type setCityDataAC = {
  type: typeof SET_CITY_DATA;
  newItem: CityData;
};

export const setCityDataAC = (newItem: CityData): setCityDataAC => ({
  type: SET_CITY_DATA,
  newItem: newItem,
});

type ActionTypes = SetWeatherDataAC | setCityDataAC | setCityNameAC;
export const getWeatherThunkCreator = (
  name: string
): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
  return async (dispatch, getState) => {
    try {
      let data = await weatherAPI.getCity(name);
      // console.log(data, "data");
      dispatch(
        setCityDataAC({
          id: data.id,
          lon: data.coord.lon,
          lat: data.coord.lat,
          name: data.name,
          temp: data.main.temp,
        })
      );
    } catch {
      console.error(`Oops`);
    }
  };
};

export default weatherReducer;
