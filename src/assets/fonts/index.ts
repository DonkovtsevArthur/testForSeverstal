import { css } from "styled-components";

import RobotoItalicWoff from "./Roboto-Italic.woff";
import RobotoItalicWoff2 from "./Roboto-Italic.woff2";

import RobotoRegularWoff from "./Roboto-Regular.woff";
import RobotoRegularWoff2 from "./Roboto-Regular.woff2";

import RobotoMediumWoff from "./Roboto-Medium.woff";
import RobotoMediumWoff2 from "./Roboto-Medium.woff2";

export const fonts = css`
  @font-face {
    font-family: "Roboto Italic";
    src: local("Roboto Italic"), local("RobotoItalic"), url(${RobotoItalicWoff2}) format("woff2"),
      url(${RobotoItalicWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

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
