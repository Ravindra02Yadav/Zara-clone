import { reducer as AppReducer } from "./App/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"

const rootreducer = combineReducers({ AppReducer, AuthReducer });
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
export { store };