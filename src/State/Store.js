// Redux store that stores global app state
import { createStore, applyMiddleware, compose } from "redux";

import LESSONS from "../Lessons/";

import thunk from "redux-thunk";

import reducer from "./CombinedReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
