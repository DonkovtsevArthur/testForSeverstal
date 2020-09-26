import { ActionTypes } from "./types";

const setTitlePush = ({ text }: { text?: string }) => ({
  type: ActionTypes.SET,
  payload: text,
});

const clearTitlePush = () => ({
  type: ActionTypes.CLEAR,
});

export { setTitlePush, clearTitlePush };
