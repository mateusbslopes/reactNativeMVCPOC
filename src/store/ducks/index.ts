import login from "./login";
import { createStore } from "redux"

export default createStore(login, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());