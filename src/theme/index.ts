import { transparentize } from "polished";

type Theme = {
  colors: {
    white: string;
    whiteTransparent: string;
    lavender: string;
    lavenderLight: string;
    blue: string;
    blueSvgActive: string;
    blueSvgHover: string;
    blueStroke: string;
  };
  fonts: {
    RobotoRegular: "Roboto Regular";
    RobotoMedium: "Roboto Medium";
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const theme: Theme = {
  colors: {
    white: "#ffffff",
    whiteTransparent: transparentize(0.96, "#ffffff"),
    lavender: "#676DAA",
    lavenderLight: "#EEF1FA",
    blue: "#272D67",
    blueSvgActive: "#3869DE",
    blueSvgHover: "#7BA2FF",
    blueStroke: "#5285FF",
  },
  fonts: { RobotoRegular: "Roboto Regular", RobotoMedium: "Roboto Medium" },
};
