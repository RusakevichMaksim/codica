import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/openweather";
import { AppStateType } from "./store";
const SET_WEATHER_DATA = `AUTH-WEATHER-DATA`;

export type InitialState = {
  id: number | null;
};

let initialState: InitialState = {
  id: null,
};

const weatherReducer = (
  state = initialState,
  action: ActionTypes
): InitialState => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, id: action.data };

    default:
      return state;
  }
};
export type SetWeatherDataAC = {
  type: typeof SET_WEATHER_DATA;
  data: number;
};
export type SetWeatherDataAC2 = {
  type: typeof SET_WEATHER_DATA;
  data: number;
};

type ActionTypes = SetWeatherDataAC | SetWeatherDataAC2;
export const setWeatherDataAC = (id: number): SetWeatherDataAC => ({
  type: SET_WEATHER_DATA,
  data: id,
});

export const getWeatherThunkCreator = (
  id: number
): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setWeatherDataAC(id));
      let data = await weatherAPI.getCity();
      console.log(data);
    } catch {
      console.error(`Oops`);
    }
  };
};

export default weatherReducer;
