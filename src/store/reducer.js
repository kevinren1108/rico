import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from  '../common/header/store/index.js'
import { reducer as productReducer } from '../pages/product/store/index.js'

const reducer = combineReducers({
  header: headerReducer,
  product: productReducer,
});

export default reducer