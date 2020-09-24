import { css } from "styled-components";

import RobotoRegularWoff from "./Roboto-Regular.woff";
import RobotoRegularWoff2 from "./Roboto-Regular.woff2";

import RobotoMediumWoff from "./Roboto-Medium.woff";
import RobotoMediumWoff2 from "./Roboto-Medium.woff2";

export const fonts = css`
  @font-face {
    font-family: "Roboto Regular";
    src: local("Roboto Regular"), local("RobotoRegular"), url(${RobotoRegularWoff2}) format("woff2"),
      url(${RobotoRegularWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto Medium";
    src: local("Roboto Medium"), local("RobotoMedium"), url(${RobotoMediumWoff2}) format("woff2"),
      url(${RobotoMediumWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
