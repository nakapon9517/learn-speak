// import { Store } from "redux";
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

// export default function createStore() {
//   const a = compose(persistState())(reduxCreateStore)(reducer);
//   console.log(a);
//   return a;
// }

const store: any = compose(persistState())(reduxCreateStore)(reducer);

export default store;
