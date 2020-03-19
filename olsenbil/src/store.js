import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReduser from "./Reducers/rootReducer";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReduser,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => {
  console.log("Log fra store " + JSON.stringify(store.getState()));
});
export default store;
