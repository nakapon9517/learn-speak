// import { Store } from "redux";
import { createStore, combineReducers } from "redux";
// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import speakReducer, { SpeakState } from "./speak/reducers";
// import thunk from "redux-thunk";
// import speak from "./speak";

export type AppState = {
  speak: SpeakState;
};

const store = createStore(
  combineReducers<AppState>({
    speak: speakReducer,
  })
);

export default store;
