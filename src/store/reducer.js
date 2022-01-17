import { combineReducers } from "redux-immutable";
import { reducer as productReducer } from "../pages/product/store/index.js";

const reducer = combineReducers({
  product: productReducer,
});

export default reducer;