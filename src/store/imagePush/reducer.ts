import { ActionTypes, ImagePushState } from "./types";
import { AnyAction } from "redux";

const initialState: ImagePushState = {
  url: "",
  view: "",
  isError: false,
  textError: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET:
      return {
        ...state,
        text: action.payload,
      };

    case ActionTypes.SET_VIEW:
      return {
        ...state,
        view: action.payload,
        isError: false,
        textError: [],
      };

    case ActionTypes.SET_URL:
      return {
        ...state,
        url: action.payload.url,
        isError: action.payload.isError,
        textError: [action.payload.textError],
      };

    case ActionTypes.SET_ERROR:
      return {
        ...state,
        isError: true,
        textError: [action.payload],
      };

    case ActionTypes.SET_ERRORS:
      return {
        ...state,
        isError: true,
        textError: [...state.textError, action.payload],
      };

    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        isError: false,
        textError: [],
      };

    case ActionTypes.CLEAR:
      return initialState;

    default:
      return state;
  }
};
