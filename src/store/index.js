import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import { loadState, saveState } from "../localStorage";

const enhancer = applyMiddleware(thunk, logger);

const persistedState = loadState();
const store = createStore(reducer, persistedState, enhancer);

store.subscribe(() => {
  saveState({
    employees: {
      ...store.getState().employees,
      users: {},
      loading: false,
      loaded: false,
    },
  });
});

window.store = store; // toDo: remove
export default store;
