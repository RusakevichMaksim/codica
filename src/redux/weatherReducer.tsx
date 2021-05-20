import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/openweather";
import { AppStateType } from "./store";
const SET_WEATHER_DATA = ` SET-WEATHER-DATA`;
const SET_CITY_NAME = "SET-CITY-NAME";
const SET_CITY_DATA = "SET-CITY-DATA";
export type CityData = {
  id: number;
  coord: {
    lat: number;
    lon: number;
  };
  name: string;
  temp: number;
};
export type InitialState = {
  id: number | null;
  citySelected: string;
  cityGroup: CityData[];
};

export type CityGroup = {};

let initialState: InitialState = {
  id: null,
  citySelected: "",
  cityGroup: [
    {
      id: 1,
      coord: {
        lat: 1,
        lon: 1,
      },
      name: "dasd",
      temp: 1,
    },
  ],
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
      console.log("oridjin", state.cityGroup);
      let stateCopy = JSON.stringify(state);
      let newCopy = JSON.parse(stateCopy);
      newCopy.concat(action.newItem);
      console.log("copy", newCopy);
      // return newCopy;
      return state;
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

export const setCityDataAC = (newItems: CityData): setCityDataAC => ({
  type: SET_CITY_DATA,
  newItem: newItems,
});

type ActionTypes = SetWeatherDataAC | setCityDataAC | setCityNameAC;

export const getWeatherThunkCreator = (
  name: string
): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
  return async (dispatch, getState) => {
    try {
      // dispatch(setWeatherDataAC(id));
      // console.log(name);
      let data = await weatherAPI.getCity(name);
      await dispatch(
        setCityDataAC({
          id: data.id,
          coord: data.coord,
          name: data.name,
          temp: data.main.temp,
        })
      );

      // console.log(data);
    } catch {
      console.error(`Oops`);
    }
  };
};

// export const setCityName = (
//   name: string
// ): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
//   return async (dispatch, getState) => {};
// };

export default weatherReducer;
