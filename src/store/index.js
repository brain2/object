import { createStore, applyMiddleware } from 'redux';
// import thunk from "redux-thunk";
import reducer from "../reducer"
import logger from "../middlewares/logger";
import api from "../middlewares/api";
import { loadState, saveState } from "../localStorage";

// const enhancer = applyMiddleware(thunk, api, logger);
const enhancer = applyMiddleware(api, logger);

const persistedState = loadState();
const store = createStore(reducer, persistedState, enhancer);

store.subscribe(() => {
  saveState({
    employees: { ...store.getState().employees, users: {}}
  })
})

window.store = store; // toDo: remove
export default store;
