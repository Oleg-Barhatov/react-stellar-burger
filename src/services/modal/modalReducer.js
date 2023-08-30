import { MODAL_OPEN, MODAL_CLOSE } from "./modalAction";

const initialState = {
  visible: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        visible: true
      }
    case MODAL_CLOSE:
        return {
          ...state,
          visible: false
      };
    default: return state
  }
}