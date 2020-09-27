import { createFormControlStore } from "library/create-form-control-store";

export const store = createFormControlStore({ name: "title" });

// import { AnyAction } from "redux";
// import { IState } from "store/interface";

// const CHANGED = "title/CHANGED";
// const CLEARED = "title/CLEAR";

// const initialState = {
//   text: "",
//   isError: false,
//   textError: "",
// };

// export const title = (state = initialState, { type, payload }: AnyAction) => {
//   switch (type) {
//     case CHANGED:
//       return {
//         ...state,
//         text: payload,
//       };

//     case CLEARED:
//       return initialState;

//     default:
//       return state;
//   }
// };

// export const changeText = (text: string) => ({
//   type: CHANGED,
//   payload: text,
// });

// export const clearText = () => ({
//   type: CLEARED,
// });

// export const titleSelector = (state: IState) => state.title;
