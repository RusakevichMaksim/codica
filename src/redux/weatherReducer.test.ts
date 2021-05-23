import {
  InitialStateType,
  UPDATE_CITY_DATA,
  UpdateCityDataType,
} from "./weatherReducerVariable";
import { weatherReducer } from "./weatherReducer";

let state: InitialStateType;
let updateCityDataAction: UpdateCityDataType = {
  type: UPDATE_CITY_DATA,
  newItem: {
    id: 123456,
    lat: 55.4333,
    lon: 35.5167,
    name: "TestCity",
    temp: 25.01,
    feels_like: 33,
    humidity: 70,
    temp_max: 40,
    temp_min: 10,
  },
};
beforeEach(() => {
  state = {
    fetching: false,
    id: 250,
    citySelected: "TestCity",
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
      {
        id: 123456,
        lat: 55.4333,
        lon: 35.5167,
        name: "TestCity",
        temp: 19.55,
        feels_like: 33,
        humidity: 70,
        temp_max: 40,
        temp_min: 10,
      },
    ],
  };
});

test("UPDATE_CITY_DATA", () => {
  let newState = weatherReducer(state, updateCityDataAction);
  expect(newState.cityGroup[0].temp).toBe(19.55);
  expect(newState.cityGroup[1].temp).toBe(25.01);
});
