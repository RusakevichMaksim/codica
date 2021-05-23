import { InitialStateType, UPDATE_CITY_DATA } from "./weatherReducerVariable";
import { weatherReducer } from "./weatherReducer";
test("weatherReducer", () => {
  const state: InitialStateType = {
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
  let newState = weatherReducer(state, {
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
  });
  expect(newState.cityGroup[0].temp).toBeFalsy();
  expect(newState.cityGroup[1].temp).toBeTruthy();
});
