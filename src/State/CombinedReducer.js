// this folder will contain everything to do with redux
// Index file so can be imported as reducers
import { combineReducers } from "redux";

import reducer from "./Reducers";

// Combine available reducers
export default combineReducers({
  md: reducer,
});
