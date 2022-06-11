import {combineReducers, createStore} from "redux";
import NavReducer from "./nav-reducer";

let reducers =  combineReducers({
  accounts : NavReducer
}
)

let store = createStore(reducers);
window.store = store;
export default store;