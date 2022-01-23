import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "../cake/cakeReducer";
import iceCreamReducer from "../iceCream/iceCreamReducer";
import chocolateReducer from "../chocolate/chocolateReducer";
import asyncReducer from "../async/asyncReducer"
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

const store = createStore(
  combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    async: asyncReducer
  }), composeWithDevTools(applyMiddleware(logger, thunk))
);


// composeWithDevTools => devtools para DEV pode retirar
// const store = createStore(cakeReducer)

export default store;
