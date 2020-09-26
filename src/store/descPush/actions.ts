import { ActionTypes } from "./types";

const setDescPush = ({ text }: { text?: string }) => ({
  type: ActionTypes.SET,
  payload: text,
});

const clearDescPush = () => ({
  type: ActionTypes.CLEAR,
});

export { setDescPush, clearDescPush };
