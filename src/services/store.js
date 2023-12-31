import {createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootReducer } from './rootReducer';
import thunk  from 'redux-thunk'

export const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

  return store;
}

