import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/openweather";
import { AppStateType } from "./store";
const SET_WEATHER_DATA = ` SET-WEATHER-DATA`;
const SET_CITY_NAME = "SET-CITY-NAME";
const SET_CITY_DATA = "SET-CITY-DATA";
const UPDATE_CITY_DATA = "UPDATE-CITY_DATA";
const DELETE_CITY = "DELETE_CITY";
export type CityData = {
  id: number;
  lat: number;
  lon: number;
  name: string;
  temp: number;
  feels_like: number;
  humidity: number;
  temp_max: number;
  temp_min: number;
};

export type InitialState = {
  id: number | null;
  citySelected: string;
  cityNameList: Array<string>;
  cityGroup: Array<CityData>;
};

export type CityGroupType = {};

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
      feels_like: 19,
      humidity: 60,
      temp_max: 20,
      temp_min: 15,
    },
  ],
};

const doubleNameReject = (city: string, array: Array<string>) => {
  for (let i = 0; i < array.length; i++) {
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
    case UPDATE_CITY_DATA:
      let index = state.cityNameList.indexOf(action.newItem.name.toLowerCase());
      return Object.assign({}, state, {
        cityGroup: state.cityGroup
          .slice(0, index)
          .concat([action.newItem])
          .concat(state.cityGroup.slice(index + 1)),
      });
    case DELETE_CITY:
      let indexEl = state.cityNameList.indexOf(action.name.toLowerCase());
      console.log(state.cityNameList.indexOf(action.name));
      return {
        ...state,
        cityGroup: [
          ...state.cityGroup.slice(0, indexEl),
          ...state.cityGroup.slice(indexEl + 1),
        ],
        cityNameList: [
          ...state.cityNameList.slice(0, indexEl),
          ...state.cityNameList.slice(indexEl + 1),
        ],
      };
    default:
      return state;
  }
};
export type SetWeatherDataType = {
  type: typeof SET_WEATHER_DATA;
  data: number;
};
export const setWeatherDataAC = (id: number): SetWeatherDataType => ({
  type: SET_WEATHER_DATA,
  data: id,
});

export type setCityNameType = {
  type: typeof SET_CITY_NAME;
  data: string;
};

export const setCityNameAC = (name: string): setCityNameType => ({
  type: SET_CITY_NAME,
  data: name,
});

export type setCityDataType = {
  type: typeof SET_CITY_DATA;
  newItem: CityData;
};

export const setCityDataAC = (newItem: CityData): setCityDataType => ({
  type: SET_CITY_DATA,
  newItem: newItem,
});

export type updateCityDataType = {
  type: typeof UPDATE_CITY_DATA;
  newItem: CityData;
};
export const updateCityDataAC = (newItem: CityData): updateCityDataType => ({
  type: UPDATE_CITY_DATA,
  newItem: newItem,
});

export type deleteCityType = {
  type: typeof DELETE_CITY;
  name: string;
};
export const deleteCityAC = (name: string): deleteCityType => ({
  type: DELETE_CITY,
  name: name,
});

type ActionTypes =
  | SetWeatherDataType
  | setCityDataType
  | setCityNameType
  | updateCityDataType
  | deleteCityType;

export const getWeatherThunkCreator = (
  name: string
): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
  return async (dispatch, getState) => {
    try {
      let data = await weatherAPI.getCity(name);
      dispatch(
        setCityDataAC({
          id: data.id,
          lon: data.coord.lon,
          lat: data.coord.lat,
          name: data.name,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
        })
      );
    } catch {
      console.error(`Oops`);
    }
  };
};

export const updateWeatherThunkCreator = (
  name: string
): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
  return async (dispatch, getState) => {
    try {
      let data = await weatherAPI.getCity(name);
      dispatch(
        updateCityDataAC({
          id: data.id,
          lon: data.coord.lon,
          lat: data.coord.lat,
          name: data.name,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
        })
      );
    } catch {
      console.error(`Oops`);
    }
  };
};

export default weatherReducer;
