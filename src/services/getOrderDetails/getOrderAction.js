import { FETCH_ERROR } from "../errorFetch/errorFetchActions"
import { getNumOrder } from "../../utils/api"
import { MODAL_OPEN } from "../modal/modalAction"
import { CLEAR_AREA_BURGER } from "../ingredient/ingredientAction"

export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'

export const loadOrderDetails = (ingredientIdArray) => (dispatch) => {
  return getNumOrder(ingredientIdArray)
        .then(data => 
          dispatch({ type: GET_ORDER_SUCCESS, payload: data.order.number }),
          dispatch({type: MODAL_OPEN, payload: "OrderDetails"}),
          dispatch({ type: CLEAR_AREA_BURGER}),
        )
        .catch(err => dispatch({ type: FETCH_ERROR, payload: err}))
        .finally(() => 
          dispatch({type: MODAL_OPEN, payload: "OrderDetails"}),
        )
}