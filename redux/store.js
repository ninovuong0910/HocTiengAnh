import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { wordReducer } from "./word-reducer";

const reducer = combineReducers({
  words: wordReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))