import { GET_ORDER_SUCCESS } from "./getOrderAction";

const initialState = {
  order: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };
    default: return state
  }
}