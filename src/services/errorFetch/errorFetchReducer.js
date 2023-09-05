import { FETCH_ERROR } from "./errorFetchActions";

const initialState = {
  errorFetch: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ERROR:
      return {
        ...state,
        errorFetch: action.payload
      };
    default: return state
  }
}