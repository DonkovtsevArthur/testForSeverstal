import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { getImageFileReader, getParamsImage } from "./helpers";

const VIEW_IMAGE_SETTLED = "uploadImage/VIEW_IMAGE_SETTLED";
const URL_IMAGE_SETTLED = "uploadImage/URL_IMAGE_SETTLED";
const ERROR_IMAGE_SETTLED = "uploadImage/ERROR_IMAGE_SETTLED";
const ERRORS_IMAGE_SETTLED = "uploadImage/ERRORS_IMAGE_SETTLED";
const IMAGE_CLEARED = "uploadImage/IMAGE_CLEARED";
const ERROR_IMAGE_CLEARED = "uploadImage/ERROR_IMAGE_CLEARED";

const initialState = {
  url: "",
  view: undefined,
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
        textError: payload,
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

export const setErrorsImage = (text: string[]) => ({
  type: ERRORS_IMAGE_SETTLED,
  payload: text,
});

export const clearImage = () => ({
  type: IMAGE_CLEARED,
});

export const clearErrorImage = () => ({
  type: ERROR_IMAGE_CLEARED,
});

type SetViewImage = {
  view: string;
  width: number;
  height: number;
  alpha: 1 | 0;
};

export const setViewImage = ({ view, width, height, alpha }: SetViewImage) => (dispatch: Dispatch) => {
  const isSize = width === 512 && height === 512;
  const is32Bit = alpha === 1;
  const errors = [];

  if (!isSize) {
    errors.push(`размер ${width}x${height}px`);
  }
  if (!is32Bit) {
    errors.push("не 32 разрядная PNG");
  }

  if (errors.length) {
    dispatch(setErrorsImage(errors));
  }

  if (view && isSize && is32Bit) {
    dispatch({ type: VIEW_IMAGE_SETTLED, payload: view });
  }
};

const getBase64ImageFromFile = ({ data, dispatch }: { data: File; dispatch: Dispatch }) => {
  getImageFileReader(data, async (upload) => {
    const { result, alpha, width, height } = await getParamsImage(upload);
    // @ts-ignore
    dispatch(setViewImage({ view: result, width, height, alpha }));
  });
};

export const setViewFromUrl = (value: string) => async (dispatch: Dispatch) => {
  try {
    const { data, status } = await axios.get(value, { responseType: "blob" });

    if (status === 200) {
      getBase64ImageFromFile({ data, dispatch });
    }
  } catch (error) {
    console.error("setViewFromUrl -> error", error);
  }
};

export const setViewFromFile = (data: File) => (dispatch: Dispatch) => {
  getBase64ImageFromFile({ data, dispatch });
};

export const uploadImageSelector = (state: any) => state.uploadImage;
