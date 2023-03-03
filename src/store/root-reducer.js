import { combineReducers } from "redux";
import { categoriesreducer } from "./categories/categories.reducer";
import { userReducer } from "./user/userreducer";


export const rootReducer = combineReducers({
  user : userReducer,
  categories:categoriesreducer
})