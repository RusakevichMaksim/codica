import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";

import { saveState, loadState } from "../localstorage/localStorage";
let reducers = combineReducers({
  weatherReducer: weatherReducer,
});
const persistedState = loadState();

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  saveState(store.getState());
});
//@ts-ignore
window.store = store;
export default store;
