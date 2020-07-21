import login from "./login";
import theme from "./theme"
import { createStore, combineReducers } from "redux"

export default createStore(combineReducers({ login, theme }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());