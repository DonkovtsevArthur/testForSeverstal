import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import { fonts } from "../assets/fonts";

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize};
  ${fonts};
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.RobotoRegular};
    font-size: 16px;
    line-height: 19px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lavender};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin: 0;
    outline: none;
  }



  p {
    margin: 0;
    padding: 0;
    font-family: ${(p) => p.theme.fonts.RobotoRegular};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${(p) => p.theme.colors.lavender};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    transition: color .15s ease-out;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
 
`;
