import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { IState } from "./i";
import { rootReducer } from "./rootReducer";

const initialStore = (process.env.BROWSER && (window as any).REDUX_INITIAL_STORE) || {};

export const middlewares = [thunk];

const isDev = process.env.NODE_ENV !== `production`;
const enhancer = isDev ? composeWithDevTools(applyMiddleware(...middlewares)) : applyMiddleware(...middlewares);

export const store = createStore<IState, AnyAction, {}, {}>(rootReducer, initialStore, enhancer);
