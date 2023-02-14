import { combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/AuthReducer";
import { calculateReducer } from "./calculator/CalculatorReducer";

const rootReducer = combineReducers({
  calculator: calculateReducer,
  auth:AuthReducer,
});

export const store = createStore(rootReducer);
