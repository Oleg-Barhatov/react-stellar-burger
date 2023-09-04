import { MODAL_OPEN, MODAL_CLOSE, MODAL_ID } from "./modalAction";

const initialState = {
  visible: false,
  type: '',
  id: '',
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        visible: true,
        type: action.payload,
      }
    case MODAL_CLOSE:
        return {
          ...state,
          visible: false,
          type: '',
        };
    case MODAL_ID: 
      return {
        ...state,
        id: action.payload,
      }  
    default: return state
  }
}