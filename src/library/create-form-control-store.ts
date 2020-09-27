import { AnyAction } from "redux";

type Options = {
  name: string;
};

export const createFormControlStore = (options: Options) => {
  const CHANGED = `${options.name}/CHANGED`;
  const CLEARED = `${options.name}/CLEARED`;

  const initialState = {
    text: "",
    isError: false,
    textError: "",
  };

  const reducer = (state = initialState, { type, payload }: AnyAction) => {
    switch (type) {
      case CHANGED:
        return {
          ...state,
          text: payload,
        };
      case CLEARED:
        return initialState;
      default:
        return state;
    }
  };

  const changeText = (text: string) => ({
    type: CHANGED,
    payload: text,
  });

  const clearText = () => ({
    type: CLEARED,
  });

  const selector = (state: any) => state[options.name];

  return { reducer, changeText, clearText, selector };
};
