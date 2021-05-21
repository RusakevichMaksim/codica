import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";

let reducers = combineReducers({
  weatherReducer: weatherReducer,
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

//@ts-ignore
// window.store = store;
export default store;
