import { combineReducers } from 'redux';
import { reducer as dataReducer } from './getData/getDataReducer';
import { reducer as preloadReducer } from './preload/preloadReducer';
import { reducer as errorReducer } from './errorFetch/errorFetchReducer';
import { reducer as modalReducer } from './modal/modalReducer';
import { reducer as ingredientReducer } from './ingredient/ingredientReducer'
import { reducer as totalPriceReducer } from './totalPrice/totalPriceReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  preload: preloadReducer,
  errorFetch: errorReducer,
  modal: modalReducer,
  ingredient: ingredientReducer,
  totalPrice: totalPriceReducer,
  
})