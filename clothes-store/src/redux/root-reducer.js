import { combineReducers } from "redux"; // to compine all reducers in main reducer 

import userReaducer from "./user/UserReducer"; 

export default combineReducers({ //effect combine
user : userReaducer 

}) 
