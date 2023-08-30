import { getIngredients } from "../../utils/api"
import { PRELOAD_TRUE, PRELOAD_FALSE  } from "../preload/preloadActions"
import { FETCH_ERROR } from "../errorFetch/errorFetchActions"
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'



export const loadDataAction = () => (dispatch) => {
  dispatch({ type: PRELOAD_TRUE})
  return getIngredients()
        .then(data => dispatch({ type: GET_DATA_SUCCESS, payload: data.data }))
        .catch(err => dispatch({ type: FETCH_ERROR, payload: err}))
        .finally(() => dispatch({ type: PRELOAD_FALSE}))
}

