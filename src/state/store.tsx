import { Store } from "redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reducer, { State } from "./speak/reducers";
import thunk from "redux-thunk";
import speak from "./speak";

// import { routerReducer, routerMiddleware } from "react-router-redux";
// import { History } from "history";

export type AppState = {
  state: State;
};
const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers<AppState>({
    state: reducer,
  }),
  storeEnhancers(applyMiddleware(thunk))
);

export default store;

// const rootReducer = combineReducers({
//   speak,
//   // routing: routerReducer,
// });

// export default function configureStore(
//   initialState = {},
//   history: History
// ): Store {
//   const middleWares = [thunk, routerMiddleware(history)];
//   return createStore(
//     rootReducer,
//     initialState,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(...middleWares)
//   );
// }

// export type AppState = ReturnType<typeof rootReducer>;
