export enum ActionTypes {
  SET = "SET_IMAGE",
  SET_VIEW = "SET_VIEW_IMAGE",
  SET_URL = "SET_URL_IMAGE",
  SET_ERROR = "SET_ERROR_IMAGE",
  SET_ERRORS = "SET_ERRORS_IMAGE",

  CLEAR = "CLEAR_IMAGE",
  CLEAR_ERROR = "CLEAR_ERROR_IMAGE",
}

export type ImagePushState = {
  url: string;
  view: string;
  isError: boolean;
  textError: string[];
};
