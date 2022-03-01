import { combineReducers } from "redux";
import counter from './store.js'

const rootReducer = combineReducers({
  counter
})

export default rootReducer;