export enum ActionTypes {
  SET = "SET_DESC",
  CLEAR = "CLEAR_DESC",
}

export type DescPushState = {
  text: string;
  isError: boolean;
  textError: string;
};
