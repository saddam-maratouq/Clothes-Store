import { createStore,applyMiddleware } from "redux"; 
import logger from "redux-logger"; //for deebiging 

import rootReducer  from "./root-reducer"; 

const Middlewares = [logger]; 

const store = createStore(rootReducer,applyMiddleware(...Middlewares)) 

export default store; 