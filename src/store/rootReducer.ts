import { combineReducers } from "redux";
import titlePush from "./titlePush/reducer";
import descPush from "./descPush/reducer";
import imagePush from "./imagePush/reducer";

export const rootReducer = combineReducers({ titlePush, descPush, imagePush });
