import {ADD_FILLING, ADD_BUN, CLEAR_AREA_BURGER} from './ingredientAction'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    bun: null, 
    fillings: [] 
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BUN:
      return {
        ...state,
        bun: {...action.payload, key: uuidv4()}
      };
    case ADD_FILLING:
      return {
        ...state,
        fillings: [
          ...state.fillings,
          {...action.payload, key: uuidv4()},
        ]
      };
    case CLEAR_AREA_BURGER:
      return {
        ...state,
        bun: null, 
        fillings: [],
      }
    default: return state
  };
}