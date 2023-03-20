
import { combineReducers } from "redux";

import { AuthReducer } from "./Auth/reducer";
import { PostReducer } from "./post/reducer";

// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer = combineReducers({
  
  AuthReducer,
  PostReducer
});

export default rootreducer;