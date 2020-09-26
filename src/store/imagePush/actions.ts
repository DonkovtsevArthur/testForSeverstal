import { ActionTypes } from "./types";

const setImagePush = ({ text }: { text?: string }) => ({
  type: ActionTypes.SET,
  payload: text,
});

const setUrlImagePush = ({ textError, url, isError }: { textError?: string; url?: string; isError?: boolean }) => ({
  type: ActionTypes.SET_URL,
  payload: { textError, url, isError },
});

const setErrorImagePush = ({ text }: { text?: string }) => ({
  type: ActionTypes.SET_ERROR,
  payload: text,
});

const setErrorsImagePush = ({ text }: { text?: string }) => ({
  type: ActionTypes.SET_ERRORS,
  payload: text,
});

const clearImagePush = () => ({
  type: ActionTypes.CLEAR,
});

const clearErrorImagePush = () => ({
  type: ActionTypes.CLEAR_ERROR,
});

const setViewImagePush = ({
  view,
  width,
  height,
  alpha,
  error = [],
}: {
  view?: string;
  width?: number;
  height?: number;
  error?: string[];
  alpha?: 1 | 0;
}) => (dispatch: (arg0: { type: ActionTypes; payload?: string | undefined }) => void) => {
  console.log("setViewImagePush -> view", view);
  const isSize = width === 512 && height === 512;
  const is32Bit = alpha === 1;
  if (width && error.length) {
    dispatch(clearErrorImagePush());
  } else if (!isSize) {
    dispatch(setErrorsImagePush({ text: `размер ${width}x${height}px` }));
  } else if (!is32Bit) {
    dispatch(setErrorsImagePush({ text: `не 32 разрядная PNG` }));
  }
  if (view && isSize && is32Bit) {
    dispatch({ type: ActionTypes.SET_VIEW, payload: view });
  }
};

export { setImagePush, setViewImagePush, setErrorImagePush, clearImagePush, clearErrorImagePush, setUrlImagePush };
