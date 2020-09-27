import { createFormControlStore } from "library/create-form-control-store";

export const store = createFormControlStore({ name: "description" });

// import { AnyAction } from "redux";
// import { IState } from "store/interface";

// const CHANGED = "description/CHANGED";
// const CLEARED = "description/CLEARED";

// const initialState = {
//   text: "",
//   isError: false,
//   textError: "",
// };

// export const description = (state = initialState, { type, payload }: AnyAction) => {
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

// export const descriptionSelector = (state: IState) => state.description;
