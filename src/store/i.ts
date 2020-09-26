import { DescPushState } from "./descPush/types";
import { ImagePushState } from "./imagePush/types";
import { TitlePushState } from "./titlePush/types";

export interface IState {
  titlePush: TitlePushState;
  descPush: DescPushState;
  imagePush: ImagePushState;
}
