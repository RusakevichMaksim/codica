import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/openweather";
import { AppStateType } from "./store";
import {
  SET_WEATHER_DATA,
  SET_CITY_NAME,
  SET_CITY_DATA,
  UPDATE_CITY_DATA,
  DELETE_CITY,
  CityDataType,
  InitialStateType,
  initialState,
  SetCityNameType,
  SetWeatherDataType,
  SetCityDataType,
  UpdateCityDataType,
  DeleteCityType,
  ActionTypes,
} from "./weatherReducerVariable";

const doubleNameReject = (id: number, array: Array<CityDataType>) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return true;
    }
  }
  return false;
};

const weatherReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, id: action.data };
    case SET_CITY_NAME:
      return { ...state, citySelected: action.data };
    case SET_CITY_DATA:
      if (doubleNameReject(action.newItem.id, state.cityGroup)) {
        return state;
      }
      return {
        ...state,
        cityGroup: [...state.cityGroup, action.newItem],
      };
    case UPDATE_CITY_DATA:
      let index = state.cityGroup.findIndex(
        (i) => i.name.toLowerCase() === action.newItem.name.toLowerCase()
      );
      console.log(index);
      return Object.assign({}, state, {
        cityGroup: state.cityGroup
          .slice(0, index)
          .concat([action.newItem])
          .concat(state.cityGroup.slice(index + 1)),
      });
    case DELETE_CITY:
      let indexEl = state.cityGroup.findIndex(
        (i) => i.name.toLowerCase() === action.name.toLowerCase()
      );
      return {
        ...state,
        cityGroup: [
          ...state.cityGroup.slice(0, indexEl),
          ...state.cityGroup.slice(indexEl + 1),
        ],
      };
    default:
      return state;
  }
};

export const setWeatherDataAC = (id: number): SetWeatherDataType => ({
  type: SET_WEATHER_DATA,
  data: id,
});

export const setCityNameAC = (name: string): SetCityNameType => ({
  type: SET_CITY_NAME,
  data: name,
});

export const setCityDataAC = (newItem: CityDataType): SetCityDataType => ({
  type: SET_CITY_DATA,
  newItem: newItem,
});

export const updateCityDataAC = (
  newItem: CityDataType
): UpdateCityDataType => ({
  type: UPDATE_CITY_DATA,
  newItem: newItem,
});

export const deleteCityAC = (name: string): DeleteCityType => ({
  type: DELETE_CITY,
  name: name,
});

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
