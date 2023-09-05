import { PRELOAD_FALSE, PRELOAD_TRUE } from "./preloadActions";

const  initialState = {
  preload: false,
  preloadModal: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRELOAD_FALSE: 
      return {
        ...state,
        preload:  false,
      };
    case PRELOAD_TRUE: 
      return {
        ...state,
        preload:  true,
    };
    default: return state
  }
}