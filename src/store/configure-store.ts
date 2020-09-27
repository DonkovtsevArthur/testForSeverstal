import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const initialState = (process.env.BROWSER && (window as any).REDUX_INITIAL_STATE) || {};

export const middlewares = [thunk];

const IS_DEVELOPMENT = process.env.NODE_ENV === `production`;
const enhancer = IS_DEVELOPMENT
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

export const store = createStore<any, AnyAction, {}, {}>(rootReducer, initialState, enhancer);
