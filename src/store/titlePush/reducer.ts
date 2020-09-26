import { ActionTypes, TitlePushState } from "./types";
import { AnyAction } from "redux";

const initialState: TitlePushState = {
  text: "",
  isError: false,
  textError: "",
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET:
      return {
        ...state,
        text: action.payload,
      };

    case ActionTypes.CLEAR:
      return initialState;

    default:
      return state;
  }
};
