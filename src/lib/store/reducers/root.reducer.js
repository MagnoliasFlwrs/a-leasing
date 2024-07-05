import { combineReducers } from "@reduxjs/toolkit";
import { authReducer, logout } from "../features/auth";
import { api } from "../../../services/api";

const appReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

const rootReducer = (state, action) => {
  if (logout.match(action)) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
