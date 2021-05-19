import { userAPI } from "./../api/api.js";
const SET_WEATHER_DATA = `AUTH-WEATHER-DATA`;

let initialState = {
  id: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, followingProgress: action.followingProgress };

    default:
      return state;
  }
};

export const setWeatherDataAC = (id) => {
  return {
    type: SET_WEATHER_DATA,
    data: { id },
  };
};

export const getWeatherThunkCreator = () => {
  return async (dispatch) => {
    try {
      let data = await userAPI.auth();
      let { id } = data.data;
      if (data.resultCode === 0) {
        dispatch(setWeatherDataAC(id));
      } else {
        dispatch(setWeatherDataAC(null, null, null, null));
        if (data.resultCode === 1) {
        }
      }
    } catch {
      console.error(`Oops`);
    }
  };
};

export default weatherReducer;
