import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { checkIsImage, getImageFileReader, getParamsImage } from "./library";

const URL_IMAGE_SETTLED = "uploadImage/URL_IMAGE_SETTLED";
const ERROR_IMAGE_SETTLED = "uploadImage/ERROR_IMAGE_SETTLED";

const IMAGE_CLEARED = "uploadImage/IMAGE_CLEARED";
const ERROR_IMAGE_CLEARED = "uploadImage/ERROR_IMAGE_CLEARED";

const FETCH_IMAGE_REQUESTED = "uploadImage/FETCH_IMAGE_REQUESTED";
const FETCH_IMAGE_FAILURED = "uploadImage/FETCH_IMAGE_FAILURED";
const FETCH_IMAGE_SUCCEEDED = "uploadImage/FETCH_IMAGE_SUCCEEDED";

const initialState = {
  url: "",
  value: undefined,
  loading: false,
  error: [],
};

export const uploadImage = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case URL_IMAGE_SETTLED:
      return {
        ...state,
        url: payload,
        error: !checkIsImage(payload) && payload ? ["Не верно указана ссылка"] : [],
      };

    case FETCH_IMAGE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: [],
      };

    case FETCH_IMAGE_SUCCEEDED:
      return { ...state, loading: false, value: payload, error: [] };

    case FETCH_IMAGE_FAILURED:
      return { ...state, loading: false, error: [...state.error, payload] };

    case ERROR_IMAGE_SETTLED:
      return {
        ...state,
        error: [payload],
      };

    case ERROR_IMAGE_CLEARED:
      return {
        ...state,
        error: [],
      };

    case IMAGE_CLEARED:
      return initialState;

    default:
      return state;
  }
};

export const setUrl = (payload: string) => ({
  type: URL_IMAGE_SETTLED,
  payload,
});

export const clearImage = () => ({
  type: IMAGE_CLEARED,
});

export const clearError = () => ({
  type: ERROR_IMAGE_CLEARED,
});

const setLoading = () => ({
  type: FETCH_IMAGE_REQUESTED,
});

const setData = (payload: string) => ({
  type: FETCH_IMAGE_SUCCEEDED,
  payload,
});

export const setError = (payload: string) => ({
  type: FETCH_IMAGE_FAILURED,
  payload,
});

export const setFileToView = ([file]: FileList) => (dispatch: Dispatch) => {
  getImageFileReader(file, async (upload) => {
    const { result, alpha, width, height } = await getParamsImage(upload);
    const isSize = width === 512 && height === 512;
    const is32Bit = alpha === 1;

    if (!isSize) {
      dispatch(setError(`размер ${width}x${height}px`));
    }

    if (!is32Bit) {
      dispatch(setError("не 32 разрядная PNG"));
    }

    if (result && isSize && is32Bit) {
      dispatch(setData(result));
    }
  });
};

export const fetchImage = (value: string) => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  try {
    const { data, status } = await axios.get(value, { responseType: "blob" });

    if (status === 200) {
      // @ts-ignore
      dispatch(setFileToView([data]));
    }
  } catch (error) {
    dispatch(setError(error));
  }
};

export const uploadImageSelector = (state: any) => state.uploadImage;
