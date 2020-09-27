import { AnyAction, Dispatch } from "redux";

const VIEW_IMAGE_SETTLED = "uploadImage/VIEW_IMAGE_SETTLED";
const URL_IMAGE_SETTLED = "uploadImage/URL_IMAGE_SETTLED";
const ERROR_IMAGE_SETTLED = "uploadImage/ERROR_IMAGE_SETTLED";
const ERRORS_IMAGE_SETTLED = "uploadImage/ERRORS_IMAGE_SETTLED";
const IMAGE_CLEARED = "uploadImage/IMAGE_CLEARED";
const ERROR_IMAGE_CLEARED = "uploadImage/ERROR_IMAGE_CLEARED";

const initialState = {
  url: "",
  view: "",
  isError: false,
  textError: [],
};

export const uploadImage = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case VIEW_IMAGE_SETTLED:
      return {
        ...state,
        view: payload,
        isError: false,
        textError: [],
      };

    case URL_IMAGE_SETTLED:
      return {
        ...state,
        url: payload.url,
        isError: payload.isError,
        textError: [payload.textError],
      };

    case ERROR_IMAGE_SETTLED:
      return {
        ...state,
        isError: true,
        textError: [payload],
      };

    case ERRORS_IMAGE_SETTLED:
      return {
        ...state,
        isError: true,
        textError: [...state.textError, payload],
      };

    case ERROR_IMAGE_CLEARED:
      return {
        ...state,
        isError: false,
        textError: [],
      };

    case IMAGE_CLEARED:
      return initialState;

    default:
      return state;
  }
};

export const setUrlImage = ({ textError, url, isError }: { textError?: string; url?: string; isError?: boolean }) => ({
  type: URL_IMAGE_SETTLED,
  payload: { textError, url, isError },
});

export const setErrorImage = (text: string) => ({
  type: ERROR_IMAGE_SETTLED,
  payload: text,
});

export const setErrorsImage = (text: string) => ({
  type: ERRORS_IMAGE_SETTLED,
  payload: text,
});

export const clearImage = () => ({
  type: IMAGE_CLEARED,
});

export const clearErrorImage = () => ({
  type: ERROR_IMAGE_CLEARED,
});

export const setViewImage = ({
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
}) => (dispatch: Dispatch) => {
  const isSize = width === 512 && height === 512;
  const is32Bit = alpha === 1;
  if (width && error.length) {
    dispatch(clearErrorImage());
  } else if (!isSize) {
    dispatch(setErrorsImage(`размер ${width}x${height}px`));
  } else if (!is32Bit) {
    dispatch(setErrorsImage(`не 32 разрядная PNG`));
  }

  if (view && isSize && is32Bit) {
    dispatch({ type: VIEW_IMAGE_SETTLED, payload: view });
  }
};

export const uploadImageSelector = (state: any) => state.uploadImage;
