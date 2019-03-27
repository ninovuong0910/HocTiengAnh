import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { wordReducer } from "./word-reducer";
import { filterReducer } from "./filter-reducer";

const reducer = combineReducers({
  words: wordReducer,
  filterMode: filterReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))