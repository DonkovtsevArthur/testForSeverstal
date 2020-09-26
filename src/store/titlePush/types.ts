export enum ActionTypes {
  SET = "SET_TITLE",
  CLEAR = "CLEAR_TITLE",
}

export type TitlePushState = {
  text: string;
  isError: boolean;
  textError: string;
};
