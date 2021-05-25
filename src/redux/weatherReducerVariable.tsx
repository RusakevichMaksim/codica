export const SET_WEATHER_DATA = ` SET-WEATHER-DATA`;
export const SET_CITY_NAME = "SET-CITY-NAME";
export const SET_CITY_DATA = "SET-CITY-DATA";
export const UPDATE_CITY_DATA = "UPDATE-CITY-DATA";
export const DELETE_CITY = "DELETE-CITY";

export type CityDataType = {
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

export type InitialStateType = {
  fetching: boolean;
  citySelected: string;
  cityGroup: Array<CityDataType>;
};

export const initialState: InitialStateType = {
  fetching: false,
  citySelected: "",
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

// export type SetWeatherDataType = {
//   type: typeof SET_WEATHER_DATA;
//   data: number;
// };

export type SetCityNameType = {
  type: typeof SET_CITY_NAME;
  data: string;
};

export type SetCityDataType = {
  type: typeof SET_CITY_DATA;
  newItem: CityDataType;
};

export type UpdateCityDataType = {
  type: typeof UPDATE_CITY_DATA;
  newItem: CityDataType;
};

export type DeleteCityType = {
  type: typeof DELETE_CITY;
  name: string;
};

export type ActionTypes =
  | SetCityDataType
  | SetCityNameType
  | UpdateCityDataType
  | DeleteCityType;
