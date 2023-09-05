import {ADD_FILLING, ADD_BUN, CLEAR_AREA_BURGER, MOVE_INGREDIENT, DELETE_INGREDIENT} from './ingredientAction'


const initialState = {
    bun: null, 
    fillings: [] 
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BUN:
      return {
        ...state,
        bun: action.payload
      };
    case ADD_FILLING:
      return {
        ...state,
        fillings: [
          ...state.fillings,
          action.payload,
        ]
      };
    case CLEAR_AREA_BURGER:
      return {
        ...state,
        bun: null, 
        fillings: [],
      }
    case MOVE_INGREDIENT:
      const filling = [...state.fillings];
      filling.splice(action.payload.hoverIndex, 0, filling.splice(action.payload.dragIndex, 1)[0]);
      return {
        ...state,
        bun: state.bun, 
        fillings: filling,
      }
    case DELETE_INGREDIENT:
      return {
        ...state, 
        fillings: state.fillings.filter((filling => filling.key !== action.payload.key)),
      } 
    default: return state
  };
}