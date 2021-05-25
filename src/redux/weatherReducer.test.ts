import {
  InitialStateType,
  UPDATE_CITY_DATA,
  SET_CITY_NAME,
  SET_CITY_DATA,
  DELETE_CITY,
  UpdateCityDataType,
  SetCityNameType,
  SetCityDataType,
  DeleteCityType,
} from "./weatherReducerVariable";
import {
  weatherReducer,
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
} from "./weatherReducer";

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

let setCityNameAction: SetCityNameType = {
  type: SET_CITY_NAME,
  data: "Test",
};
let setCityDataActionTrue: SetCityDataType = {
  type: SET_CITY_DATA,
  newItem: {
    id: 1234562,
    lat: 55.4333,
    lon: 35.5167,
    name: "TestCity1",
    temp: 25.01,
    feels_like: 33,
    humidity: 70,
    temp_max: 40,
    temp_min: 10,
  },
};
let setCityDataActionFalse: SetCityDataType = {
  type: SET_CITY_DATA,
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
let deleteCityDataAction: DeleteCityType = {
  type: DELETE_CITY,
  name: "TestCity",
};

beforeEach(() => {
  state = {
    fetching: false,
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

test("SET_CITY_NAME", () => {
  let newState = weatherReducer(state, setCityNameAction);
  expect(newState.citySelected).toBe("Test");
});
test("SET_CITY_DATA_False", () => {
  let newState = weatherReducer(state, setCityDataActionFalse);
  console.log(newState.cityGroup);
  expect(newState.cityGroup.length).toBe(2);
});
test("SET_CITY_DATA_True", () => {
  let newState = weatherReducer(state, setCityDataActionTrue);
  console.log(newState.cityGroup);
  expect(newState.cityGroup.length).toBe(3);
});

test("UPDATE_CITY_DATA", () => {
  let newState = weatherReducer(state, updateCityDataAction);
  expect(newState.cityGroup[0].temp).toBe(19.55);
  expect(newState.cityGroup[1].temp).toBe(25.01);
});

test("DELETE_CITY_DATA", () => {
  let newState = weatherReducer(state, deleteCityDataAction);
  expect(newState.cityGroup.length).toBe(1);
});

test("getWeatherThunkCreator", async () => {
  const thunk = getWeatherThunkCreator("London");
  const dispatchMock = jest.fn();

  //@ts-ignore
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(1);
});
test("updateWeatherThunkCreator", async () => {
  const thunk = updateWeatherThunkCreator("London");
  const dispatchMock = jest.fn();

  //@ts-ignore
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(1);
});
