import { GET_DATA_SUCCESS } from "./getDataAction";

const initialState = {
  data: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: 
      return {
        ...state,
        data:  action.payload
      };
    default: return state
  }
}