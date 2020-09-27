import { AnyAction } from "redux";

type Options = {
  name: string;
};

export const createFormControlStore = (options: Options) => {
  const CHANGED = `${options.name}/CHANGED`;
  const CLEARED = `${options.name}/CLEARED`;
  const SET_ERROR = `${options.name}/SET_ERROR`;

  const initialState = {
    value: "",
    error: "",
  };

  const reducer = (state = initialState, { type, payload }: AnyAction) => {
    switch (type) {
      case CHANGED:
        return {
          ...state,
          value: payload,
          error: "",
        };

      case SET_ERROR:
        return {
          ...state,
          error: payload,
        };
      case CLEARED:
        return initialState;
      default:
        return state;
    }
  };

  const changeText = (payload: string) => ({
    type: CHANGED,
    payload,
  });

  const clearText = () => ({
    type: CLEARED,
  });

  const setError = (payload: string) => ({
    type: SET_ERROR,
    payload,
  });

  const selector = (state: any) => state[options.name];

  return { reducer, changeText, clearText, selector, setError };
};
