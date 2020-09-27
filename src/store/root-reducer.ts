import { combineReducers } from "redux";
import * as description from "features/description/store";
import * as title from "features/title/store";
import { uploadImage } from "features/upload-image/store";

export const rootReducer = combineReducers({
  description: description.store.reducer,
  title: title.store.reducer,
  uploadImage,
});
