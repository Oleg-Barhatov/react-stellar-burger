import { PRICE_SUM_BUN, PRICE_MINUS, PRICE_SUM_FILLING} from "./totalPriceAction";

const initialState ={
  totalPrice: 0
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case PRICE_SUM_BUN:
      return {
        ...state,
        totalPrice:  action.payload * 2
      };
    case PRICE_SUM_FILLING: 
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload
      }
    case PRICE_MINUS:
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload
      };
    default: return state;
  }
}