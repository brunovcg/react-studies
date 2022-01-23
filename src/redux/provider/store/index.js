import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "../cake/cakeReducer";
import iceCreamReducer from "../iceCream/iceCreamReducer";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  }), composeWithDevTools(applyMiddleware(logger))
);


// composeWithDevTools => devtools para DEV pode retirar
// const store = createStore(cakeReducer)

export default store;
