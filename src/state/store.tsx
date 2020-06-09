import {
  createStore as reduxCreateStore,
  combineReducers,
  compose,
  Reducer,
} from "redux";
import speakReducer, { SpeakState } from "./speak/reducers";
import persistState from "redux-localstorage";

export type AppState = {
  speak: SpeakState;
};

const reducer: Reducer = combineReducers({
  speak: speakReducer,
});

const store: any = compose(persistState())(reduxCreateStore)(reducer);

export default store;
